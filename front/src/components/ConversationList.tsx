import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
  ListItemButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import {
  useCreateConversationMutation,
  useDeleteConversationMutation,
} from "../store/api";
import { useState, useEffect, useCallback } from "react";
import type { Conversation } from "../types";

interface Props {
  onSelect: (id: string) => void;
}

export default function ConversationList({ onSelect }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [undoId, setUndoId] = useState<string | null>(null);
  const [undoTimer, setUndoTimer] = useState<NodeJS.Timeout | null>(null);

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [create] = useCreateConversationMutation();
  const [deleteConvo] = useDeleteConversationMutation();

  // Fetch conversations using fetch directly
  const fetchConversations = useCallback(async () => {
    console.log("[ConversationList] Fetching conversations...");
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/conversations", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(
        "[ConversationList] Response status:",
        response.status,
        response.statusText
      );
      console.log("[ConversationList] Response headers:", {
        contentType: response.headers.get("content-type"),
        contentLength: response.headers.get("content-length"),
      });

      if (response.status === 204) {
        console.warn(
          "[ConversationList] Received 204 No Content - treating as empty array"
        );
        setConversations([]);
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: Conversation[] = await response.json();
      console.log("[ConversationList] Fetched conversations:", data.length);

      if (!Array.isArray(data)) {
        console.error("[ConversationList] Response is not an array:", data);
        throw new Error("Invalid response format: expected array");
      }

      setConversations(data);
      setIsLoading(false);
    } catch (err) {
      console.error("[ConversationList] Fetch error:", err);
      setError(
        err instanceof Error ? err : new Error("Failed to fetch conversations")
      );
      setIsLoading(false);
    }
  }, []);

  // Fetch conversations on mount and after mutations
  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  const handleDelete = (id: string) => {
    // Optimistic update - remove from local state
    const deletedConversation = conversations.find((c) => c.id === id);
    setConversations((prev) => prev.filter((c) => c.id !== id));

    const timer = setTimeout(async () => {
      try {
        await deleteConvo(id).unwrap();
        // Refetch to ensure consistency
        await fetchConversations();
        setUndoId(null);
      } catch (err) {
        console.error("Delete failed, restoring conversation:", err);
        // Restore on error
        if (deletedConversation) {
          setConversations((prev) =>
            [...prev, deletedConversation].sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
          );
        }
        setUndoId(null);
      }
    }, 5000);

    setUndoId(id);
    setUndoTimer(timer);
  };

  const handleUndo = () => {
    if (undoTimer) clearTimeout(undoTimer);
    setUndoId(null);
    fetchConversations();
  };

  useEffect(() => {
    return () => {
      if (undoTimer) clearTimeout(undoTimer);
    };
  }, [undoTimer]);

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Box
          sx={{
            width: 300,
            borderRight: 1,
            borderColor: "divider",
            overflow: "auto",
          }}
        >
          <InnerList />
        </Box>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <>
          <IconButton onClick={() => setMobileOpen(true)} sx={{ ml: 1, mt: 1 }}>
            <MenuIcon />
          </IconButton>
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
            <Box sx={{ width: 280 }}>
              <InnerList onClose={() => setMobileOpen(false)} />
            </Box>
          </Drawer>
        </>
      )}

      {/* Undo Snackbar */}
      <Snackbar
        open={!!undoId}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={null}
      >
        <Alert
          severity="info"
          action={
            <Button color="inherit" size="small" onClick={handleUndo}>
              UNDO
            </Button>
          }
        >
          Conversation deleted
        </Alert>
      </Snackbar>
    </>
  );

  function InnerList({ onClose }: { onClose?: () => void }) {
    return (
      <>
        <Box p={2} display="flex" justifyContent="space-between">
          <Typography variant="h6">Chats</Typography>
          <Button
            startIcon={<AddIcon />}
            onClick={async () => {
              try {
                const res = await create().unwrap();
                // Refetch to get the new conversation in the list
                await fetchConversations();
                onSelect(res.id);
                onClose?.();
              } catch (err) {
                console.error("Create failed", err);
              }
            }}
          >
            New
          </Button>
        </Box>

        {error ? (
          <Box p={2}>
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              Failed to load conversations: {error?.message || "Unknown error"}
            </Typography>
            <Button
              onClick={fetchConversations}
              variant="outlined"
              size="small"
              fullWidth
            >
              Retry
            </Button>
          </Box>
        ) : isLoading ? (
          <Typography p={2}>Loading...</Typography>
        ) : conversations.length > 0 ? (
          <List>
            {conversations.map((c) => (
              <ListItem key={c.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    onSelect(c.id);
                    onClose?.();
                  }}
                  sx={{ pl: 2, pr: 1 }}
                >
                  <ListItemText
                    primary={c.title}
                    secondary={
                      c.lastMessageAt
                        ? new Date(c.lastMessageAt).toLocaleString()
                        : "No messages"
                    }
                  />
                  <IconButton
                    edge="end"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(c.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Box p={2} textAlign="center">
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              No conversations yet
            </Typography>
            <Button
              variant="outlined"
              size="small"
              startIcon={<AddIcon />}
              onClick={async () => {
                try {
                  const res = await create().unwrap();
                  // Refetch to get the new conversation in the list
                  await fetchConversations();
                  onSelect(res.id);
                  onClose?.();
                } catch (err) {
                  console.error("Create failed", err);
                }
              }}
            >
              Create your first chat
            </Button>
          </Box>
        )}
      </>
    );
  }
}
