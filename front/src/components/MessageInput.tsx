import { TextField, IconButton, Box, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSendMessageMutation, api } from '../store/api';
import { useState, useRef } from 'react';
import { useAppDispatch } from '../store/hooks';

interface Props {
  conversationId: string;
}

export default function MessageInput({ conversationId }: Props) {
  const [send, { isLoading, reset }] = useSendMessageMutation();
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const tempIdRef = useRef<string | null>(null);

  const handleSend = async () => {
    if (!value.trim() || isLoading) return;

    const tempId = `temp-${Date.now()}`;
    tempIdRef.current = tempId;

    // Optimistic UI
    dispatch(
      api.util.updateQueryData(
        'getConversation',
        { id: conversationId },
        (draft) => {
          draft.messages.push({
            id: tempId,
            role: 'user' as const,
            content: value.trim(),
            createdAt: new Date().toISOString(),
          });
        }
      )
    );

    try {
      await send({
        conversationId,
        content: value.trim(),
      }).unwrap();

      setValue('');
      tempIdRef.current = null;
    } catch (err: any) {
      if (err.name === 'AbortError') {
        console.log('Send cancelled');
      }
      // Remove temp message
      dispatch(
        api.util.updateQueryData(
          'getConversation',
          { id: conversationId },
          (draft) => {
            draft.messages = draft.messages.filter((m) => m.id !== tempId);
          }
        )
      );
      tempIdRef.current = null;
    }
  };

  const handleCancel = () => {
    if (!tempIdRef.current) return;

    // Abort request
    reset();

    // Remove optimistic message
    dispatch(
      api.util.updateQueryData(
        'getConversation',
        { id: conversationId },
        (draft) => {
          draft.messages = draft.messages.filter((m) => m.id !== tempIdRef.current);
        }
      )
    );

    tempIdRef.current = null;
  };

  return (
    <Box p={2} borderTop={1} borderColor="divider">
      <TextField
        fullWidth
        multiline
        maxRows={5}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        disabled={isLoading}
        placeholder="Type a message..."
        InputProps={{
          endAdornment: isLoading ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              <IconButton onClick={handleCancel}>
                <CancelIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={handleSend} disabled={!value.trim()}>
              <SendIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}