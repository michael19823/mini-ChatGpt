import { Router } from "express";
import { prisma } from "../prisma";

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
    res.status(200).json(convos || []);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch conversations" });
  }
});

// POST /api/conversations
router.post("/", async (req, res) => {
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
  res.status(201).json(convo);
});

// DELETE /api/conversations/:id
router.delete("/:id", async (req, res) => {
  await prisma.conversation.delete({ where: { id: req.params.id } });
  res.status(204).send();
});

export default router;
