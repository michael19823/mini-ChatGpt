import { Router } from "express";
import { prisma } from "../prisma";
import { createLlmAdapter } from "../adapters/factory";
import { withRetry } from "../utils/retry";
import { logger } from "../utils/logger";
import {
  validate,
  conversationIdSchema,
  messageCursorSchema,
  createMessageSchema,
} from "../utils/validation";

const router = Router();
const llm = createLlmAdapter();

// GET /api/conversations/:id/messages
router.get(
  "/:id/messages",
  validate(conversationIdSchema, "params"),
  validate(messageCursorSchema, "query"),
  async (req, res) => {
    try {
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
        return res.status(404).json({
          error: "Not found",
          message: "The conversation could not be found.",
        });
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
    } catch (err: any) {
      logger.error("Failed to fetch messages", err, {
        correlationId: req.correlationId,
        conversationId: req.params.id,
      });

      // Check for database connection errors
      if (
        err?.code === "P1001" ||
        err?.code === "P1008" ||
        err?.code === "P1017"
      ) {
        return res.status(503).json({
          error: "Service temporarily unavailable",
          message: "Database connection failed. Please try again later.",
        });
      }

      res.status(500).json({
        error: "Failed to fetch messages",
        message: "Unable to load messages. Please try again later.",
      });
    }
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

      // Retry up to 2 times (3 total attempts) with back-off for 500 errors only
      // Don't retry on timeout/abort - those should fail fast
      let lastError: any;
      let completion: { completion: string } | undefined;
      
      for (let attempt = 0; attempt <= 2; attempt++) {
        if (abortController.signal.aborted) {
          const abortError = new Error("Aborted");
          abortError.name = "AbortError";
          throw abortError;
        }

        try {
          completion = await llm.complete(llmHistory, abortController.signal);
          if (attempt > 0) {
            logger.info("LLM call succeeded after retry", {
              correlationId: req.correlationId,
              conversationId: id,
              attempt: attempt + 1,
            });
          }
          break;
        } catch (err: any) {
          lastError = err;

          // Don't retry if aborted
          if (
            err.name === "AbortError" ||
            err.name === "CanceledError" ||
            abortController.signal.aborted
          ) {
            throw err;
          }

          // Only retry on 500 errors
          // Ollama adapter wraps 500 errors in Error with message "Ollama returned a 500 error: ..."
          const is500Error =
            err.response?.status === 500 ||
            (typeof err.message === "string" &&
              err.message.includes("500 error") &&
              err.message.includes("Ollama"));

          if (is500Error && attempt < 2) {
            const delay = 500 * (attempt + 1); // 500ms, 1000ms
            logger.warn("LLM returned 500 error, retrying", {
              correlationId: req.correlationId,
              conversationId: id,
              attempt: attempt + 1,
              maxAttempts: 3,
              delayMs: delay,
              error: err.message,
            });

            // Wait with back-off, but check for abort during delay
            await new Promise((resolve, reject) => {
              const timeout = setTimeout(() => {
                abortController.signal.removeEventListener("abort", abortHandler);
                resolve(undefined);
              }, delay);

              const abortHandler = () => {
                clearTimeout(timeout);
                abortController.signal.removeEventListener("abort", abortHandler);
                const abortError = new Error("Aborted");
                abortError.name = "AbortError";
                reject(abortError);
              };

              abortController.signal.addEventListener("abort", abortHandler);
            });
            continue; // Retry
          }

          // For non-500 errors or final attempt, don't retry
          throw err;
        }
      }

      if (!completion) {
        throw lastError || new Error("LLM call failed");
      }

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

      // Helper function to delete user message if it exists
      const deleteUserMessage = async () => {
        if (userMsg) {
          await prisma.message
            .delete({ where: { id: userMsg.id } })
            .catch(() => {
              // Ignore deletion errors
            });
        }
      };

      if (isAborted) {
        logger.info("Request aborted", {
          correlationId: req.correlationId,
          conversationId: id,
        });
        await deleteUserMessage();
        return;
      }

      // Check for database errors (Prisma)
      if (err.code === "P2002") {
        logger.error("Database constraint violation", err, {
          correlationId: req.correlationId,
          conversationId: id,
        });
        await deleteUserMessage();
        res.status(400).json({
          error: "A conflict occurred. Please try again.",
          message: "The requested operation conflicts with existing data.",
        });
        return;
      }

      if (err.code === "P2025") {
        logger.error("Record not found", err, {
          correlationId: req.correlationId,
          conversationId: id,
        });
        await deleteUserMessage();
        res.status(404).json({
          error: "Not found",
          message: "The conversation or message could not be found.",
        });
        return;
      }

      // Check for database connection errors
      if (
        err.code === "P1001" ||
        err.code === "P1008" ||
        err.code === "P1017"
      ) {
        logger.error("Database connection error", err, {
          correlationId: req.correlationId,
          conversationId: id,
        });
        await deleteUserMessage();
        res.status(503).json({
          error: "Service temporarily unavailable",
          message: "Database connection failed. Please try again later.",
        });
        return;
      }

      // Check for timeout errors
      const isTimeout =
        err.code === "ETIMEDOUT" ||
        err.message?.includes("timeout") ||
        err.message?.includes("timed out");

      if (isTimeout) {
        logger.error("LLM timeout", err, {
          correlationId: req.correlationId,
          conversationId: id,
        });
        await deleteUserMessage();
        res.status(504).json({
          error: "Request timeout",
          message:
            "The AI service is taking too long to respond. Please try again.",
        });
        return;
      }

      // Check for network errors
      if (err.code === "ECONNREFUSED" || err.code === "ENOTFOUND") {
        logger.error("LLM service unavailable", err, {
          correlationId: req.correlationId,
          conversationId: id,
        });
        await deleteUserMessage();
        res.status(503).json({
          error: "Service unavailable",
          message:
            "The AI service is currently unavailable. Please try again later.",
        });
        return;
      }

      // Generic LLM errors - delete user message for all other errors too
      // Check if this is a 500 error after retries - provide more context
      const is500ErrorAfterRetries =
        err.message?.includes("500 error") && err.message?.includes("Ollama");

      logger.error("LLM request failed", err, {
        correlationId: req.correlationId,
        conversationId: id,
        is500ErrorAfterRetries,
      });
      await deleteUserMessage();
      
      // If all retries failed for a 500 error, provide a more informative message
      if (is500ErrorAfterRetries) {
        res.status(500).json({
          error: "AI service error",
          message: "The AI service is temporarily unavailable after multiple attempts. Please try again in a moment.",
        });
      } else {
        // For other errors, use generic message but include error details if available
        const errorMessage = err.message || "Failed to get response from AI service. Please try again.";
        res.status(500).json({
          error: "AI service error",
          message: errorMessage.includes("AI service") ? errorMessage : `Failed to get response from AI service: ${errorMessage}`,
        });
      }
    }
  }
);

export default router;
