import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSendMessageMutation } from "../store/api";
import { useRef, useState } from "react";

interface Props {
  conversationId: string;
}

export default function MessageInput({ conversationId }: Props) {
  const [send, { isLoading, reset }] = useSendMessageMutation();
  const [value, setValue] = useState("");
  const abortControllerRef = useRef<AbortController | null>(null);
  const isPendingRef = useRef(false);

  const handleSend = async () => {
    if (!value.trim() || isLoading || isPendingRef.current) return;

    console.log("[FRONTEND] Step 1: handleSend() called - starting request");

    // Mark as pending to prevent duplicate sends
    isPendingRef.current = true;

    // Create a new AbortController for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    console.log(
      "[FRONTEND] Step 2: AbortController created, signal.aborted =",
      abortController.signal.aborted
    );

    try {
      // Store content before sending
      const contentToSend = value.trim();

      // Check if already aborted before sending
      if (abortController.signal.aborted) {
        console.log(
          "[FRONTEND] Step 3: Already aborted before send - exiting early"
        );
        isPendingRef.current = false;
        abortControllerRef.current = null;
        return;
      }

      console.log("[FRONTEND] Step 4: Calling RTK Query send() with signal");
      // Pass the abort signal to the mutation
      // The custom baseQuery will check if signal is aborted BEFORE making the fetch request
      const result = send({
        conversationId,
        content: contentToSend,
        signal: abortController.signal,
      });

      console.log("[FRONTEND] Step 5: Waiting for result.unwrap()");
      await result.unwrap();
      console.log("[FRONTEND] Step 6: Request completed successfully");

      // Only clear input if not aborted
      if (!abortController.signal.aborted) {
        setValue("");
      }
    } catch (err: any) {
      // Silently ignore abort/cancel errors
      if (
        err?.name === "AbortError" ||
        err?.name === "CanceledError" ||
        err?.status === 499 ||
        err?.data === "Cancelled" ||
        err?.data?.error === "Cancelled"
      ) {
        console.log(
          "[FRONTEND] Step 7: Request was aborted/cancelled - error name:",
          err?.name
        );
      } else {
        console.error("[FRONTEND] Step 7: Failed to send message:", err);
      }
    } finally {
      console.log(
        "[FRONTEND] Step 8: Cleanup - setting pending to false, clearing abortController"
      );
      isPendingRef.current = false;
      abortControllerRef.current = null;
    }
  };

  const handleCancel = () => {
    console.log("[FRONTEND] CANCEL CLICKED - handleCancel() called");
    // Abort the controller immediately - this prevents the fetch request
    if (abortControllerRef.current) {
      console.log(
        "[FRONTEND] CANCEL: Aborting controller, signal.aborted will be:",
        true
      );
      abortControllerRef.current.abort();
      console.log(
        "[FRONTEND] CANCEL: Controller aborted, signal.aborted is now:",
        abortControllerRef.current.signal.aborted
      );
      abortControllerRef.current = null;
    } else {
      console.log("[FRONTEND] CANCEL: No abortController found in ref");
    }
    isPendingRef.current = false;
    reset();
    console.log("[FRONTEND] CANCEL: Reset called, input should re-enable");
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
