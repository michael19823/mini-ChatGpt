import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSendMessageMutation } from "../store/api";
import { useState } from "react";

interface Props {
  conversationId: string;
}

export default function MessageInput({ conversationId }: Props) {
  const [send, { isLoading, reset }] = useSendMessageMutation();
  const [value, setValue] = useState("");

  const handleSend = async () => {
    if (!value.trim() || isLoading) return;

    try {
      // Call mutation and store the result (which has abort() method)
      const mutationResult = send({
        conversationId,
        content: value.trim(),
      });

      // Store abort function for cancellation
      // RTK Query mutation result has abort() method
      (window as any).__currentSendAbort = mutationResult;

      await mutationResult.unwrap();

      setValue("");
      (window as any).__currentSendAbort = null;
    } catch (err: any) {
      (window as any).__currentSendAbort = null;

      // Silently handle cancellation - it's expected behavior
      if (
        err.name === "AbortError" ||
        err.name === "Aborted" ||
        err.status === 499 ||
        (err.data &&
          (err.data === "Cancelled" || err.data.error === "Cancelled"))
      ) {
        // User cancelled - this is expected, don't show error
        return;
      }
      // For other errors, you might want to show a notification
      console.error("Failed to send message:", err);
    }
  };

  const handleCancel = () => {
    // Abort the current request via RTK Query's abort method
    if ((window as any).__currentSendAbort) {
      (window as any).__currentSendAbort.abort();
      (window as any).__currentSendAbort = null;
    }
    reset();
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
          if (e.key === "Enter" && !e.shiftKey) {
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
