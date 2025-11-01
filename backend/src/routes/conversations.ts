import { Router } from "express";
import { prisma } from "../prisma";
import { logger } from "../utils/logger";
import { validate, conversationIdSchema } from "../utils/validation";

const router = Router();

let convoCounter = 1;

// GET /api/conversations
router.get("/", async (req, res) => {
  try {
    const convos = await prisma.conversation.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        lastMessageAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
    logger.info("Fetched conversations", {
      correlationId: req.correlationId,
      count: convos.length,
    });
    res.status(200).json(convos || []);
  } catch (error: any) {
    logger.error("Failed to fetch conversations", error, {
      correlationId: req.correlationId,
    });
    
    // Check for database connection errors
    if (error?.code === "P1001" || error?.code === "P1008" || error?.code === "P1017") {
      res.status(503).json({ 
        error: "Service temporarily unavailable",
        message: "Database connection failed. Please try again later."
      });
      return;
    }
    
    res.status(500).json({ 
      error: "Failed to fetch conversations",
      message: "Unable to load conversations. Please try again later."
    });
  }
});

// POST /api/conversations
router.post("/", async (req, res) => {
  try {
    const title = `Conversation #${convoCounter++}`;
    const convo = await prisma.conversation.create({
      data: { title },
      select: {
        id: true,
        title: true,
        createdAt: true,
        lastMessageAt: true,
      },
    });
    logger.info("Created conversation", {
      correlationId: req.correlationId,
      conversationId: convo.id,
      title: convo.title,
    });
    res.status(201).json(convo);
  } catch (error: any) {
    logger.error("Failed to create conversation", error, {
      correlationId: req.correlationId,
    });
    
    // Check for database connection errors
    if (error?.code === "P1001" || error?.code === "P1008" || error?.code === "P1017") {
      res.status(503).json({ 
        error: "Service temporarily unavailable",
        message: "Database connection failed. Please try again later."
      });
      return;
    }
    
    // Check for constraint violations
    if (error?.code === "P2002") {
      res.status(400).json({ 
        error: "A conflict occurred",
        message: "Unable to create conversation. Please try again."
      });
      return;
    }
    
    res.status(500).json({ 
      error: "Failed to create conversation",
      message: "Unable to create conversation. Please try again."
    });
  }
});

// DELETE /api/conversations/:id
router.delete("/:id", validate(conversationIdSchema, "params"), async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.conversation.delete({ where: { id } });
    logger.info("Deleted conversation", {
      correlationId: req.correlationId,
      conversationId: id,
    });
    res.status(204).send();
  } catch (error: any) {
    logger.error("Failed to delete conversation", error, {
      correlationId: req.correlationId,
      conversationId: req.params.id,
    });
    
    // Check if conversation not found
    if (error?.code === "P2025") {
      res.status(404).json({ 
        error: "Not found",
        message: "The conversation could not be found."
      });
      return;
    }
    
    // Check for database connection errors
    if (error?.code === "P1001" || error?.code === "P1008" || error?.code === "P1017") {
      res.status(503).json({ 
        error: "Service temporarily unavailable",
        message: "Database connection failed. Please try again later."
      });
      return;
    }
    
    res.status(500).json({ 
      error: "Failed to delete conversation",
      message: "Unable to delete conversation. Please try again."
    });
  }
});

export default router;
