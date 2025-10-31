import { Router } from "express";
import { prisma } from "../prisma";
import { createLlmAdapter } from "../adapters/factory";
import { withRetry } from "../utils/retry";

const router = Router();
const llm = createLlmAdapter();

// GET /api/conversations/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const cursor = req.query.messagesCursor as string | undefined;
  const limit = parseInt(req.query.limit as string) || 20;

  const convo = await prisma.conversation.findUnique({
    where: { id },
    select: { id: true, title: true },
  });

  if (!convo) return res.status(404).json({ error: "Not found" });

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

  res.json({
    ...convo,
    messages: reversed,
    pageInfo: { prevCursor, nextCursor },
  });
});

// POST /api/conversations/:id/messages
router.post("/:id/messages", async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;

  console.log("[BACKEND] Step 1: Request received - POST /messages", {
    id,
    content: content.substring(0, 20) + "...",
  });

  // Preferred approach: Client aborts fetch, no server endpoint required
  // When the client aborts the fetch request, the connection closes and we detect it here
  // This cancels the in-flight LLM call automatically
  const abortController = new AbortController();
  let isClientConnected = true;
  let userMsg: any = null;
  let responseSent = false;

  console.log(
    "[BACKEND] Step 2: AbortController created, signal.aborted =",
    abortController.signal.aborted
  );

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
  const cleanup = (eventName: string) => {
    console.log(`[BACKEND] CLEANUP: ${eventName} event fired!`);
    console.log(
      "[BACKEND] CLEANUP: socket.destroyed =",
      req.socket?.destroyed,
      "socket.closed =",
      req.socket?.closed
    );
    console.log(
      "[BACKEND] CLEANUP: isClientConnected =",
      isClientConnected,
      "responseSent =",
      responseSent
    );

    if (isClientConnected && !responseSent) {
      console.log(
        "[BACKEND] CLEANUP: Setting isClientConnected = false and aborting controller"
      );
      isClientConnected = false;
      abortController.abort(); // This will cancel the LLM call
      console.log(
        "[BACKEND] CLEANUP: Controller aborted, signal.aborted =",
        abortController.signal.aborted
      );

      // If user message was created, delete it since request was cancelled
      if (userMsg && !responseSent) {
        console.log(
          "[BACKEND] CLEANUP: Deleting user message from DB, id =",
          userMsg.id
        );
        prisma.message.delete({ where: { id: userMsg.id } }).catch(() => {
          // Ignore deletion errors
        });
      }
    } else {
      console.log(
        "[BACKEND] CLEANUP: Skipping cleanup (already sent response or not connected)"
      );
    }
  };

  // Listen to multiple events to catch disconnects
  // 'aborted' fires when client disconnects before body is fully read
  req.on("aborted", () => cleanup("req.aborted"));

  // 'close' fires when socket closes (but can fire prematurely with keep-alive)
  // We check socket state to filter false positives
  req.on("close", () => {
    // Only treat as disconnect if socket is actually destroyed
    // This filters out premature close events from keep-alive connections
    if (req.socket?.destroyed || req.socket?.closed) {
      cleanup("req.close (socket destroyed)");
    }
  });

  // Also check if socket is already destroyed (immediate disconnect)
  if (!checkConnection()) {
    console.log(
      "[BACKEND] Step 2.5: Socket already destroyed - client disconnected immediately"
    );
    cleanup("immediate check");
    return;
  }

  console.log(
    "[BACKEND] Step 3: Registered req.on('aborted') and req.on('close') listeners"
  );

  // Check if already aborted or disconnected before saving to DB
  const connectionCheck = checkConnection();
  if (
    abortController.signal.aborted ||
    !isClientConnected ||
    !connectionCheck
  ) {
    console.log(
      "[BACKEND] Step 4: Already aborted/disconnected before DB save - exiting",
      {
        signalAborted: abortController.signal.aborted,
        isClientConnected,
        connectionCheck,
        socketDestroyed: req.socket?.destroyed,
      }
    );
    return; // Don't save anything if already cancelled
  }

  console.log("[BACKEND] Step 4: Saving user message to DB");
  userMsg = await prisma.message.create({
    data: { conversationId: id, role: "user", content },
  });
  console.log("[BACKEND] Step 5: User message saved, id =", userMsg.id);

  await prisma.conversation.update({
    where: { id },
    data: { lastMessageAt: new Date() },
  });

  try {
    // Check if cancelled before fetching history
    console.log("[BACKEND] Step 6: Checkpoint #1 - Before fetching history");
    const connectionCheck1 = checkConnection();
    console.log(
      "[BACKEND] Step 6: signal.aborted =",
      abortController.signal.aborted,
      "isClientConnected =",
      isClientConnected,
      "connectionCheck =",
      connectionCheck1
    );
    if (
      abortController.signal.aborted ||
      !isClientConnected ||
      !connectionCheck1
    ) {
      console.log(
        "[BACKEND] Step 6: ABORTED at checkpoint #1 - deleting user message and exiting"
      );
      if (userMsg) {
        await prisma.message.delete({ where: { id: userMsg.id } });
      }
      return;
    }

    // Fetch history
    console.log("[BACKEND] Step 7: Fetching conversation history");
    const dbHistory = await prisma.message.findMany({
      where: { conversationId: id },
      orderBy: { createdAt: "asc" },
      select: { role: true, content: true }, // Only send role + content
    });
    console.log(
      "[BACKEND] Step 8: History fetched, messages count =",
      dbHistory.length
    );

    // Check again after DB fetch
    console.log("[BACKEND] Step 9: Checkpoint #2 - After fetching history");
    const connectionCheck2 = checkConnection();
    console.log(
      "[BACKEND] Step 9: signal.aborted =",
      abortController.signal.aborted,
      "isClientConnected =",
      isClientConnected,
      "connectionCheck =",
      connectionCheck2
    );
    if (
      abortController.signal.aborted ||
      !isClientConnected ||
      !connectionCheck2
    ) {
      console.log(
        "[BACKEND] Step 9: ABORTED at checkpoint #2 - deleting user message and exiting"
      );
      if (userMsg) {
        await prisma.message.delete({ where: { id: userMsg.id } });
      }
      return;
    }

    // Map to LLM format
    const llmHistory = dbHistory.map((m) => ({
      role: m.role as "user" | "assistant", // Type assertion (DB enforces)
      content: m.content,
    }));

    // Pass abort signal to LLM call - if client disconnects, this will cancel the LLM call
    console.log(
      "[BACKEND] Step 10: Calling LLM with signal (signal.aborted =",
      abortController.signal.aborted,
      ")"
    );
    const completion = await withRetry(
      () => llm.complete(llmHistory, abortController.signal),
      2,
      500,
      abortController.signal
    );
    console.log("[BACKEND] Step 11: LLM call completed");

    // Check if cancelled after LLM call
    console.log("[BACKEND] Step 12: Checkpoint #3 - After LLM call");
    const connectionCheck3 = checkConnection();
    console.log(
      "[BACKEND] Step 12: signal.aborted =",
      abortController.signal.aborted,
      "isClientConnected =",
      isClientConnected,
      "connectionCheck =",
      connectionCheck3
    );
    if (
      abortController.signal.aborted ||
      !isClientConnected ||
      !connectionCheck3
    ) {
      console.log(
        "[BACKEND] Step 12: ABORTED at checkpoint #3 - deleting user message and exiting"
      );
      if (userMsg) {
        await prisma.message.delete({ where: { id: userMsg.id } });
      }
      return;
    }

    console.log("[BACKEND] Step 13: Saving assistant message to DB");
    const assistantMsg = await prisma.message.create({
      data: {
        conversationId: id,
        role: "assistant",
        content: completion.completion,
      },
    });
    console.log(
      "[BACKEND] Step 14: Assistant message saved, id =",
      assistantMsg.id
    );

    // Check if client is still connected before sending response
    console.log("[BACKEND] Step 15: Checkpoint #4 - Before sending response");
    const connectionCheck4 = checkConnection();
    console.log(
      "[BACKEND] Step 15: signal.aborted =",
      abortController.signal.aborted,
      "isClientConnected =",
      isClientConnected,
      "connectionCheck =",
      connectionCheck4
    );
    if (
      !isClientConnected ||
      abortController.signal.aborted ||
      !connectionCheck4
    ) {
      console.log(
        "[BACKEND] Step 15: ABORTED at checkpoint #4 - not sending response"
      );
      // Client disconnected/cancelled - don't send response
      return;
    }

    responseSent = true;
    console.log("[BACKEND] Step 16: Sending response to client");
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
    console.log("[BACKEND] Step 17: Response sent successfully");
  } catch (err: any) {
    console.log("[BACKEND] CATCH: Error caught in try-catch block");
    console.log(
      "[BACKEND] CATCH: Error name =",
      err.name,
      "code =",
      err.code,
      "message =",
      err.message
    );

    // Clean up listeners
    req.removeAllListeners("aborted");
    req.removeAllListeners("close");

    // Ensure we always send a response if headers haven't been sent
    if (res.headersSent) {
      console.log("[BACKEND] CATCH: Headers already sent - returning");
      return;
    }

    responseSent = true;

    // Check if request was aborted/cancelled
    const isAborted =
      abortController.signal.aborted ||
      err.name === "AbortError" ||
      err.name === "CanceledError" ||
      err.code === "ECONNABORTED" ||
      !isClientConnected;

    console.log(
      "[BACKEND] CATCH: isAborted =",
      isAborted,
      "signal.aborted =",
      abortController.signal.aborted
    );

    if (isAborted) {
      console.log(
        "[BACKEND] CATCH: Request was aborted/cancelled - cleaning up"
      );
      // Client cancelled the request - clean up user message from DB
      if (userMsg) {
        console.log("[BACKEND] CATCH: Deleting user message, id =", userMsg.id);
        await prisma.message.delete({ where: { id: userMsg.id } }).catch(() => {
          // Ignore deletion errors
        });
      }
      // Don't send response for cancelled requests
      console.log(
        "[BACKEND] CATCH: Not sending response for cancelled request"
      );
      return;
    }

    // Check for timeout errors
    const isTimeout =
      err.code === "ETIMEDOUT" || err.message?.includes("timeout");

    if (isTimeout) {
      console.log("[BACKEND] CATCH: Timeout error - sending 500 response");
      res.status(500).json({ error: "LLM timeout", retryAfterMs: 1000 });
      return;
    }

    // All other errors (including LLM failures)
    console.error("[BACKEND] CATCH: Other error - sending 500 response", {
      errName: err.name,
      errMessage: err.message,
      errCode: err.code,
      headersSent: res.headersSent,
    });
    res.status(500).json({ error: "LLM failed", retryAfterMs: 1000 });
  }
});

export default router;
