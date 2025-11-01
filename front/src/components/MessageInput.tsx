import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSendMessageMutation } from "../store/api";
import { useRef, useState } from "react";

interface Props {
  conversationId: string;
}

export default function MessageInput({ conversationId }: Props) {
  const [value, setValue] = useState("");
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const abortControllerRef = useRef<AbortController | null>(null);
  const isPendingRef = useRef(false);

  const handleSend = async () => {
    if (!value.trim() || isLoading || isPendingRef.current) return;

    // Mark as pending to prevent duplicate sends
    isPendingRef.current = true;

    // Create a new AbortController for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const contentToSend = value.trim();

    try {
      await sendMessage({
        conversationId,
        content: contentToSend,
        signal: abortController.signal,
      }).unwrap();

      if (!abortController.signal.aborted) {
        setValue("");
      }
    } catch {
      // Ignore errors - RTK Query handles cleanup
    } finally {
      isPendingRef.current = false;
      abortControllerRef.current = null;
    }
  };

  const handleCancel = () => {
    // Abort the controller - RTK Query will handle aborting the fetch request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    isPendingRef.current = false;
  };

  return (
    <Box p={2} borderTop={1} borderColor="divider">
      <Box display="flex" alignItems="flex-end" gap={1}>
        <TextField
          fullWidth
          multiline
          maxRows={5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={isLoading}
          placeholder="Type a message..."
        />
        {isLoading && <CircularProgress size={22} sx={{ mr: 0.5 }} />}
        <IconButton
          onClick={handleCancel}
          aria-label="Cancel sending"
          disabled={!isLoading}
          color="error"
        >
          <CancelIcon />
        </IconButton>
        <IconButton
          onClick={handleSend}
          aria-label="Send message"
          disabled={!value.trim() || isLoading}
          color="primary"
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
