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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import {
  useGetConversationsQuery,
  useCreateConversationMutation,
  useDeleteConversationMutation,
  api,
} from '../store/api';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';

interface Props {
  onSelect: (id: string) => void;
}

export default function ConversationList({ onSelect }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [undoId, setUndoId] = useState<string | null>(null);
  const [undoTimer, setUndoTimer] = useState<NodeJS.Timeout | null>(null);

  const dispatch = useAppDispatch();
  const { data: conversations = [], isLoading, error, refetch } = useGetConversationsQuery();
  const [create] = useCreateConversationMutation();
  const [deleteConvo] = useDeleteConversationMutation();

  const handleDelete = (id: string) => {
    // Optimistic update
    dispatch(
      api.util.updateQueryData('getConversations', undefined, (draft) =>
        draft.filter((c) => c.id !== id)
      )
    );

    const timer = setTimeout(() => {
      deleteConvo(id);
      setUndoId(null);
    }, 5000);

    setUndoId(id);
    setUndoTimer(timer);
  };

  const handleUndo = () => {
    if (undoTimer) clearTimeout(undoTimer);
    setUndoId(null);
    refetch();
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
        <Box sx={{ width: 300, borderRight: 1, borderColor: 'divider', overflow: 'auto' }}>
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
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

      {/* Error State */}
      {error && (
        <Box p={2}>
          <Typography color="error">
            Failed to load conversations: {(error as any).data || 'Try again'}
          </Typography>
          <Button onClick={refetch}>Retry</Button>
        </Box>
      )}
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
                onSelect(res.id);
                onClose?.();
              } catch (err) {
                console.error('Create failed', err);
              }
            }}
          >
            New
          </Button>
        </Box>

        {isLoading ? (
          <Typography p={2}>Loading...</Typography>
        ) : (
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
                        : 'No messages'
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
        )}
      </>
    );
  }
}