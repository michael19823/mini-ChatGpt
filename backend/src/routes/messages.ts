import { Router } from "express";
import { prisma } from "../prisma";
import { createLlmAdapter } from "../adapters/factory";
import { withRetry } from "../utils/retry";
import { logger } from "../utils/logger";
import { validate, conversationIdSchema, messageCursorSchema, createMessageSchema } from "../utils/validation";

const router = Router();
const llm = createLlmAdapter();

// GET /api/conversations/:id/messages
router.get(
  "/:id/messages",
  validate(conversationIdSchema, "params"),
  validate(messageCursorSchema, "query"),
  async (req, res) => {
    const { id } = req.params;
    const cursor = req.query.messagesCursor as string | undefined;
    const limit = parseInt(req.query.limit as string) || 20;

    const convo = await prisma.conversation.findUnique({
      where: { id },
      select: { id: true, title: true },
    });

    if (!convo) {
      logger.warn("Conversation not found", {
        correlationId: req.correlationId,
        conversationId: id,
      });
      return res.status(404).json({ error: "Not found" });
    }

    const messages = await prisma.message.findMany({
      where: { conversationId: id },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
    });

    const hasMore = messages.length > limit;
    const sliced = hasMore ? messages.slice(0, limit) : messages;
    const reversed = sliced.reverse();

    const prevCursor = reversed[0]?.id || null;
    const nextCursor = hasMore ? messages[messages.length - 1].id : null;

    logger.info("Fetched conversation messages", {
      correlationId: req.correlationId,
      conversationId: id,
      messageCount: reversed.length,
      hasMore,
    });

    res.json({
      ...convo,
      messages: reversed,
      pageInfo: { prevCursor, nextCursor },
    });
  }
);

// POST /api/conversations/:id/messages
router.post(
  "/:id/messages",
  validate(conversationIdSchema, "params"),
  validate(createMessageSchema, "body"),
  async (req, res) => {
    const { content } = req.body;
    const { id } = req.params;

    logger.info("Received message request", {
      correlationId: req.correlationId,
      conversationId: id,
      contentLength: content.length,
    });

    const abortController = new AbortController();
    let isClientConnected = true;
    let userMsg: any = null;
    let responseSent = false;

    // Helper function to check if client is still connected
    const checkConnection = (): boolean => {
      // Check socket state - if destroyed, client disconnected
      // This works even if req.on("aborted") didn't fire (e.g., if body was already read)
      const socket = req.socket;
      const isDestroyed = socket?.destroyed || false;
      const socketExists = !!socket;

      // Socket destroyed = client disconnected
      // No socket = connection never established or already closed
      return socketExists && !isDestroyed;
    };

    // Listen for client disconnect (happens when frontend aborts fetch)
    const cleanup = () => {
      if (isClientConnected && !responseSent) {
        isClientConnected = false;
        abortController.abort();

        if (userMsg && !responseSent) {
          prisma.message.delete({ where: { id: userMsg.id } }).catch(() => {
            // Ignore deletion errors
          });
        }
      }
    };

    req.on("aborted", cleanup);
    req.on("close", () => {
      if (req.socket?.destroyed || req.socket?.closed) {
        cleanup();
      }
    });

    if (!checkConnection()) {
      cleanup();
      return;
    }

    if (
      abortController.signal.aborted ||
      !isClientConnected ||
      !checkConnection()
    ) {
      return;
    }

    userMsg = await prisma.message.create({
      data: { conversationId: id, role: "user", content },
    });

    logger.info("Created user message", {
      correlationId: req.correlationId,
      conversationId: id,
      messageId: userMsg.id,
    });

    await prisma.conversation.update({
      where: { id },
      data: { lastMessageAt: new Date() },
    });

    try {
      if (
        abortController.signal.aborted ||
        !isClientConnected ||
        !checkConnection()
      ) {
        if (userMsg) {
          await prisma.message.delete({ where: { id: userMsg.id } });
        }
        return;
      }

      const dbHistory = await prisma.message.findMany({
        where: { conversationId: id },
        orderBy: { createdAt: "asc" },
        select: { role: true, content: true },
      });

      if (
        abortController.signal.aborted ||
        !isClientConnected ||
        !checkConnection()
      ) {
        if (userMsg) {
          await prisma.message.delete({ where: { id: userMsg.id } });
        }
        return;
      }

      const llmHistory = dbHistory.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

      logger.info("Calling LLM", {
        correlationId: req.correlationId,
        conversationId: id,
        historyLength: llmHistory.length,
      });

      // Don't retry on timeout - just call directly for faster response
      const completion = await llm.complete(llmHistory, abortController.signal);

      logger.info("LLM completion received", {
        correlationId: req.correlationId,
        conversationId: id,
        completionLength: completion.completion.length,
      });

      if (
        abortController.signal.aborted ||
        !isClientConnected ||
        !checkConnection()
      ) {
        if (userMsg) {
          await prisma.message.delete({ where: { id: userMsg.id } });
        }
        return;
      }

      const assistantMsg = await prisma.message.create({
        data: {
          conversationId: id,
          role: "assistant",
          content: completion.completion,
        },
      });

      logger.info("Created assistant message", {
        correlationId: req.correlationId,
        conversationId: id,
        messageId: assistantMsg.id,
      });

      if (
        !isClientConnected ||
        abortController.signal.aborted ||
        !checkConnection()
      ) {
        logger.warn("Client disconnected before sending response", {
          correlationId: req.correlationId,
          conversationId: id,
        });
        return;
      }

      responseSent = true;
      logger.info("Sending response", {
        correlationId: req.correlationId,
        conversationId: id,
      });
      res.json({
        message: {
          id: userMsg.id,
          role: "user",
          content: userMsg.content,
          createdAt: userMsg.createdAt,
        },
        reply: {
          id: assistantMsg.id,
          role: "assistant",
          content: assistantMsg.content,
          createdAt: assistantMsg.createdAt,
        },
      });
    } catch (err: any) {
      // Clean up listeners
      req.removeAllListeners("aborted");
      req.removeAllListeners("close");

      if (res.headersSent) {
        return;
      }

      responseSent = true;

      const isAborted =
        abortController.signal.aborted ||
        err.name === "AbortError" ||
        err.name === "CanceledError" ||
        err.code === "ECONNABORTED" ||
        !isClientConnected;

      if (isAborted) {
        logger.info("Request aborted", {
          correlationId: req.correlationId,
          conversationId: id,
        });
        if (userMsg) {
          await prisma.message.delete({ where: { id: userMsg.id } }).catch(() => {
            // Ignore deletion errors
          });
        }
        return;
      }

      const isTimeout =
        err.code === "ETIMEDOUT" || err.message?.includes("timeout");

      if (isTimeout) {
        logger.error("LLM timeout", err, {
          correlationId: req.correlationId,
          conversationId: id,
        });
        res.status(500).json({ error: "LLM timeout", retryAfterMs: 1000 });
        return;
      }

      logger.error("LLM request failed", err, {
        correlationId: req.correlationId,
        conversationId: id,
      });
      res.status(500).json({ error: "LLM failed", retryAfterMs: 1000 });
    }
  }
);

export default router;
