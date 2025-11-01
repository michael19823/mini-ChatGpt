import { Box, CircularProgress, Button, Stack, Typography } from '@mui/material';
import { useGetConversationQuery, api, getErrorMessage, isMessageAborted } from '../store/api';
import { useAppDispatch } from '../store/hooks';
import { addNotification } from '../store/notifications';
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

  // Show error notification when conversation fails to load
  useEffect(() => {
    if (error) {
      const errorMessage = getErrorMessage(error);
      dispatch(
        addNotification({
          message: `Failed to load conversation: ${errorMessage}`,
          severity: "error",
        })
      );
    }
  }, [error, dispatch]);

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
      const errorMessage = getErrorMessage(err);
      dispatch(
        addNotification({
          message: `Failed to load older messages: ${errorMessage}`,
          severity: "error",
        })
      );
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
      <Box flex={1} p={3} display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2}>
        <Typography color="error" variant="h6">
          Failed to load conversation
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {getErrorMessage(error)}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </Button>
      </Box>
    );
  }

  // Filter out any temporary optimistic messages that shouldn't be displayed
  // Also filter out any messages that are in the aborted messages set
  const allMessages = [...olderMessages, ...(convo?.messages || [])].filter(
    (m) => {
      // Remove temp messages
      if (m.id.startsWith("temp-")) return false;
      // Remove aborted user messages
      if (m.role === "user" && conversationId && isMessageAborted(conversationId, m.content)) {
        return false;
      }
      return true;
    }
  );

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