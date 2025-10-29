import { Router } from 'express';
import { prisma } from '../prisma';
import { createLlmAdapter } from '../adapters/factory';
import { withRetry } from '../utils/retry';

const router = Router();
const llm = createLlmAdapter();

// GET /api/conversations/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cursor = req.query.messagesCursor as string | undefined;
  const limit = parseInt(req.query.limit as string) || 20;

  const convo = await prisma.conversation.findUnique({
    where: { id },
    select: { id: true, title: true },
  });

  if (!convo) return res.status(404).json({ error: 'Not found' });

  const messages = await prisma.message.findMany({
    where: { conversationId: id },
    orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
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
router.post('/:id/messages', async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;

  const userMsg = await prisma.message.create({
    data: { conversationId: id, role: 'user', content },
  });

  await prisma.conversation.update({
    where: { id },
    data: { lastMessageAt: new Date() },
  });

  try {
    // Fetch history
    const dbHistory = await prisma.message.findMany({
      where: { conversationId: id },
      orderBy: { createdAt: 'asc' },
      select: { role: true, content: true }, // Only send role + content
    });

    // Map to LLM format
    const llmHistory = dbHistory.map(m => ({
      role: m.role as 'user' | 'assistant', // Type assertion (DB enforces)
      content: m.content,
    }));

    const completion = await withRetry(() => llm.complete(llmHistory), 2, 500);

    const assistantMsg = await prisma.message.create({
      data: { conversationId: id, role: 'assistant', content: completion.completion },
    });

    res.json({
      message: {
        id: userMsg.id,
        role: 'user',
        content: userMsg.content,
        createdAt: userMsg.createdAt,
      },
      reply: {
        id: assistantMsg.id,
        role: 'assistant',
        content: assistantMsg.content,
        createdAt: assistantMsg.createdAt,
      },
    });
  } catch (err: any) {
    if (err.name === 'AbortError') {
      await prisma.message.delete({ where: { id: userMsg.id } });
      return res.status(499).json({ error: 'Cancelled' });
    }
    res.status(500).json({ error: 'LLM failed', retryAfterMs: 1000 });
  }
});

export default router;