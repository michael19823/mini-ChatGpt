import { Router } from "express";
import { prisma } from "../prisma";
import { v4 as uuidv4 } from "uuid";

const router = Router();

let convoCounter = 1;

// GET /api/conversations
router.get("/", async (req, res) => {
  console.log("[GET /conversations] Route hit!");
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
    console.log(
      "[GET /conversations] Found",
      convos.length,
      "conversations, returning status 200"
    );
    // Explicitly set status to 200 and ensure we always return an array
    res.status(200).json(convos || []);
  } catch (error) {
    console.error("[GET /conversations] Error:", error);
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
