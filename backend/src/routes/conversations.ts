import { Router } from 'express';
import { prisma } from '../prisma';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

let convoCounter = 1;

// GET /api/conversations
router.get('/', async (req, res) => {
  const convos = await prisma.conversation.findMany({
    select: {
      id: true,
      title: true,
      createdAt: true,
      lastMessageAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });
  res.json(convos);
});

// POST /api/conversations
router.post('/', async (req, res) => {
  const title = `Conversation #${convoCounter++}`;
  const convo = await prisma.conversation.create({
    data: { title },
  });
  res.status(201).json({
    id: convo.id,
    title: convo.title,
    createdAt: convo.createdAt,
  });
});

// DELETE /api/conversations/:id
router.delete('/:id', async (req, res) => {
  await prisma.conversation.delete({ where: { id: req.params.id } });
  res.status(204).send();
});

export default router;