import { Box, CircularProgress, Button, Stack, Typography } from '@mui/material';
import { useGetConversationQuery, api } from '../store/api';
import { useAppDispatch } from '../store/hooks';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { useEffect, useRef, useState } from 'react';
import type { Message } from '../types';

interface Props {
  conversationId: string | null;
}

export default function ChatWindow({ conversationId }: Props) {
  const dispatch = useAppDispatch();
  const [olderMessages, setOlderMessages] = useState<Message[]>([]);
  const [isLoadingOlder, setIsLoadingOlder] = useState(false);

  const {
    data: convo,
    isLoading,
    isFetching,
    error,
  } = useGetConversationQuery(
    { id: conversationId!, limit: 20 },
    { skip: !conversationId, refetchOnMountOrArgChange: true }
  );

  const scrollRef = useRef<HTMLDivElement>(null);

  // Clear older messages when switching conversation
  useEffect(() => {
    setOlderMessages([]);
  }, [conversationId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [convo?.messages, olderMessages]);

  const handleLoadMore = async () => {
    if (!convo?.pageInfo.prevCursor || !conversationId || isLoadingOlder) return;

    setIsLoadingOlder(true);
    try {
      const result = await dispatch(
        api.endpoints.getConversation.initiate({
          id: conversationId,
          cursor: convo.pageInfo.prevCursor,
          limit: 20,
        })
      ).unwrap();

      setOlderMessages((prev) => [...result.messages, ...prev]);
    } catch (err) {
      console.error('Failed to load older messages', err);
    } finally {
      setIsLoadingOlder(false);
    }
  };

  if (!conversationId) {
    return (
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <Typography color="text.secondary">Select or create a conversation</Typography>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box flex={1} p={3}>
        <Typography color="error">
          Failed to load chat: {(error as any).data || 'Try again'}
        </Typography>
      </Box>
    );
  }

  const allMessages = [...olderMessages, ...(convo?.messages || [])];

  return (
    <Box display="flex" flexDirection="column" height="100%">
      {/* Load Older Button */}
      {convo?.pageInfo.prevCursor && (
        <Stack alignItems="center" py={1}>
          <Button
            size="small"
            onClick={handleLoadMore}
            disabled={isLoadingOlder || isFetching}
          >
            {isLoadingOlder ? 'Loading...' : 'Load older messages'}
          </Button>
        </Stack>
      )}

      {/* Messages */}
      <Box flex={1} overflow="auto" p={2}>
        {allMessages.map((m) => (
          <MessageBubble key={m.id} msg={m} />
        ))}
        <div ref={scrollRef} />
      </Box>

      {/* Input */}
      <MessageInput conversationId={conversationId} />
    </Box>
  );
}