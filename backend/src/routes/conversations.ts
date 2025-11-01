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
  } catch (error) {
    logger.error("Failed to fetch conversations", error, {
      correlationId: req.correlationId,
    });
    res.status(500).json({ error: "Failed to fetch conversations" });
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
  } catch (error) {
    logger.error("Failed to create conversation", error, {
      correlationId: req.correlationId,
    });
    res.status(500).json({ error: "Failed to create conversation" });
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
  } catch (error) {
    logger.error("Failed to delete conversation", error, {
      correlationId: req.correlationId,
      conversationId: req.params.id,
    });
    res.status(500).json({ error: "Failed to delete conversation" });
  }
});

export default router;
