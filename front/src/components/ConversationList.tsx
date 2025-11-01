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
  useGetConversationsQuery,
  useCreateConversationMutation,
  useDeleteConversationMutation,
  api,
} from "../store/api";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";

interface Props {
  onSelect: (id: string) => void;
}

export default function ConversationList({ onSelect }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [undoId, setUndoId] = useState<string | null>(null);
  const [undoTimer, setUndoTimer] = useState<NodeJS.Timeout | null>(null);
  const [undoPatchResult, setUndoPatchResult] = useState<any>(null);

  const dispatch = useAppDispatch();
  const {
    data: conversations = [],
    isLoading,
    error,
    refetch,
  } = useGetConversationsQuery();

  const [create] = useCreateConversationMutation();
  const [deleteConvo] = useDeleteConversationMutation();

  const handleDelete = (id: string) => {
    // Optimistic update - remove from cache immediately
    const patchResult = dispatch(
      api.util.updateQueryData("getConversations", undefined, (draft) => {
        if (!draft) return [];
        return draft.filter((c) => c.id !== id);
      })
    );
    setUndoPatchResult(patchResult);

    // Schedule actual delete after 5 seconds (for undo functionality)
    const timer = setTimeout(async () => {
      try {
        await deleteConvo(id).unwrap();
        // RTK Query automatically refetches due to invalidatesTags
        setUndoId(null);
        setUndoPatchResult(null);
      } catch (err) {
        // Restore on error
        patchResult.undo();
        setUndoId(null);
        setUndoPatchResult(null);
      }
    }, 5000);

    setUndoId(id);
    setUndoTimer(timer);
  };

  const handleUndo = () => {
    if (undoTimer) clearTimeout(undoTimer);
    // Restore the optimistic update
    if (undoPatchResult) {
      undoPatchResult.undo();
      setUndoPatchResult(null);
    }
    setUndoId(null);
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
                // RTK Query automatically refetches due to invalidatesTags
                onSelect(res.id);
                onClose?.();
              } catch (err) {
                // Error creating conversation
              }
            }}
          >
            New
          </Button>
        </Box>

        {error ? (
          <Box p={2}>
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              Failed to load conversations:{" "}
              {(error as any)?.data?.message ||
                (error as any)?.message ||
                "Unknown error"}
            </Typography>
            <Button
              onClick={() => refetch()}
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
                  // RTK Query automatically refetches due to invalidatesTags
                  onSelect(res.id);
                  onClose?.();
                } catch (err) {
                  // Error creating conversation
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
