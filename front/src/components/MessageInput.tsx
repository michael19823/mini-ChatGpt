import { TextField, IconButton, Box, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSendMessageMutation } from '../store/api';
import { useState, useRef } from 'react';

interface Props {
  conversationId: string;
}

export default function MessageInput({ conversationId }: Props) {
  const [send, { isLoading }] = useSendMessageMutation();
  const [value, setValue] = useState('');
  const controllerRef = useRef<AbortController | null>(null);

  const handleSend = async () => {
    if (!value.trim() || isLoading) return;

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      await send({
        conversationId,
        content: value.trim(),
      }).unwrap();
      setValue('');
    } catch (err: any) {
      if (err.name === 'AbortError') {
        console.log('Send cancelled');
      }
    } finally {
      controllerRef.current = null;
    }
  };

  const handleCancel = () => {
    controllerRef.current?.abort();
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