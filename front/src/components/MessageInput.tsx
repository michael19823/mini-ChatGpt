import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSendMessageMutation, getErrorMessage } from "../store/api";
import { useAppDispatch } from "../store/hooks";
import { addNotification } from "../store/notifications";
import { useRef, useState } from "react";

interface Props {
  conversationId: string;
}

export default function MessageInput({ conversationId }: Props) {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
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
    } catch (err: any) {
      // Check if the abort controller was aborted by the user
      // This is the most reliable way to detect user-initiated cancellations
      const wasAbortedByUser = abortController.signal.aborted;

      // Also check for abort error types (in case the check above misses it)
      const isAbortError =
        wasAbortedByUser ||
        err?.name === "AbortError" ||
        err?.name === "CanceledError" ||
        err?.message === "Request was aborted" ||
        err?.message?.includes("aborted") ||
        (err instanceof DOMException && err.name === "AbortError") ||
        // RTK Query may wrap abort errors
        (err?.status === "FETCH_ERROR" && err?.error?.includes("aborted"));

      // Don't show notification for user-initiated cancellations
      if (!isAbortError) {
        const errorMessage = getErrorMessage(err);
        dispatch(
          addNotification({
            message: errorMessage,
            severity: "error",
            duration: 8000, // Show error longer
          })
        );
      }
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
