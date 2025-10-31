import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import { api } from "../store/api";
import { useAppDispatch } from "../store/hooks";
import { useRef, useState } from "react";
import type { SendResponse } from "../types";

interface Props {
  conversationId: string;
}

export default function MessageInput({ conversationId }: Props) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const isPendingRef = useRef(false);

  const handleSend = async () => {
    if (!value.trim() || isLoading || isPendingRef.current) return;

    console.log("[FRONTEND] Step 1: handleSend() called - starting request");

    // Mark as pending and loading to prevent duplicate sends
    isPendingRef.current = true;
    setIsLoading(true);

    // Create a new AbortController for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    console.log(
      "[FRONTEND] Step 2: AbortController created, signal.aborted =",
      abortController.signal.aborted
    );

    // Store content before sending
    const contentToSend = value.trim();

    // Optimistic update - add user message immediately
    const tempId = `temp-${Date.now()}`;
    const patchResult = dispatch(
      api.util.updateQueryData(
        "getConversation",
        { id: conversationId },
        (draft) => {
          if (!draft) return;
          draft.messages.push({
            id: tempId,
            role: "user",
            content: contentToSend,
            createdAt: new Date().toISOString(),
          });
        }
      )
    );

    try {
      // Check if already aborted before sending
      if (abortController.signal.aborted) {
        console.log(
          "[FRONTEND] Step 3: Already aborted before send - exiting early"
        );
        patchResult.undo();
        isPendingRef.current = false;
        setIsLoading(false);
        abortControllerRef.current = null;
        return;
      }

      console.log("[FRONTEND] Step 4: Calling fetch() directly with signal");
      console.log(
        "[FRONTEND] Step 4: signal.aborted =",
        abortController.signal.aborted
      );

      // Use native fetch() for direct control over abort signal
      // When signal is aborted, fetch() will throw AbortError and close the HTTP connection
      const response = await fetch(
        `/api/conversations/${conversationId}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: contentToSend }),
          signal: abortController.signal, // Direct signal control - aborting will close connection
        }
      );

      // If we reach here, fetch completed (but might have been aborted during response parsing)
      console.log(
        "[FRONTEND] Step 5: Fetch completed, status =",
        response.status,
        "signal.aborted =",
        abortController.signal.aborted
      );

      // Check if aborted - this handles race condition where abort happens after fetch resolves but before we read the body
      if (abortController.signal.aborted) {
        console.log(
          "[FRONTEND] Step 5: Signal was aborted during/after fetch - aborting"
        );
        patchResult.undo();
        throw new DOMException("Request was aborted", "AbortError");
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data: SendResponse = await response.json();
      console.log("[FRONTEND] Step 6: Request completed successfully");

      // Update cache with real messages (replace optimistic update)
      dispatch(
        api.util.updateQueryData(
          "getConversation",
          { id: conversationId },
          (draft) => {
            if (!draft) return;
            // Remove temporary message
            draft.messages = draft.messages.filter(
              (m) => !m.id.startsWith("temp-")
            );
            // Add real messages from server
            draft.messages.push(data.message, data.reply);
          }
        )
      );

      // Invalidate tags to refresh conversation list
      dispatch(
        api.util.invalidateTags([
          { type: "Conversation", id: conversationId },
          { type: "Conversation", id: "LIST" },
        ])
      );

      // Only clear input if not aborted
      if (!abortController.signal.aborted) {
        setValue("");
      }
    } catch (err: any) {
      // Revert optimistic update on error
      patchResult.undo();

      // Check if this is an abort error
      const isAbortError =
        err?.name === "AbortError" ||
        err?.name === "CanceledError" ||
        err.message === "Request was aborted" ||
        (err instanceof DOMException && err.name === "AbortError");

      if (isAbortError) {
        console.log(
          "[FRONTEND] Step 7: Request was aborted/cancelled - error name:",
          err?.name,
          "message:",
          err?.message
        );
        console.log(
          "[FRONTEND] Step 7: Abort occurred - HTTP connection should be closed, backend should detect req.on('aborted')"
        );
      } else {
        console.error("[FRONTEND] Step 7: Failed to send message:", err);
        // Could show error toast here
      }
    } finally {
      console.log(
        "[FRONTEND] Step 8: Cleanup - setting pending to false, clearing abortController"
      );
      isPendingRef.current = false;
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleCancel = () => {
    console.log("[FRONTEND] CANCEL CLICKED - handleCancel() called");
    // Abort the controller immediately - this will abort the fetch() request
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
    setIsLoading(false);
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
