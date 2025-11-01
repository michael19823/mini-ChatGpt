import { Container, CssBaseline, AppBar, Toolbar, Typography, Box, Modal, Button, Paper, Stack } from '@mui/material';
import ConversationList from './components/ConversationList';
import ChatWindow from './components/ChatWindow';
import NotificationContainer from './components/NotificationContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { useGetConversationsQuery, useCreateConversationMutation, getErrorMessage } from './store/api';
import { useAppDispatch } from './store/hooks';
import { addNotification } from './store/notifications';
import { useState } from 'react';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { data: conversations = [], isLoading } = useGetConversationsQuery();
  const [createConversation] = useCreateConversationMutation();

  const hasNoConversations = !isLoading && conversations.length === 0;

  const handleCreateFirstConversation = async () => {
    try {
      const res = await createConversation().unwrap();
      setSelectedId(res.id);
      dispatch(
        addNotification({
          message: "Conversation created!",
          severity: "success",
          duration: 3000,
        })
      );
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      dispatch(
        addNotification({
          message: `Failed to create conversation: ${errorMessage}`,
          severity: "error",
        })
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Mini ChatGPT</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth={false} disableGutters sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
        <ConversationList onSelect={setSelectedId} selectedId={selectedId} />
        <Box flex={1}>
          <ChatWindow conversationId={selectedId} />
        </Box>
      </Container>
      
      <NotificationContainer />

      {/* Modal for empty state */}
      <Modal
        open={hasNoConversations}
        aria-labelledby="create-first-conversation-modal"
        aria-describedby="create-first-conversation-description"
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 400 },
            p: 4,
            outline: 'none',
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography id="create-first-conversation-modal" variant="h5" component="h2" textAlign="center">
              Welcome to Mini ChatGPT
            </Typography>
            <Typography id="create-first-conversation-description" variant="body1" color="text.secondary" textAlign="center">
              Get started by creating your first conversation. You can chat with the AI assistant about anything you'd like!
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleCreateFirstConversation}
              sx={{ minWidth: 200 }}
            >
              Create Your First Conversation
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </ThemeProvider>
  );
}

export default App;