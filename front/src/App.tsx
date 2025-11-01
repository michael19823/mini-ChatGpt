import { Container, CssBaseline, AppBar, Toolbar, Typography, Box } from '@mui/material';
import ConversationList from './components/ConversationList';
import ChatWindow from './components/ChatWindow';
import NotificationContainer from './components/NotificationContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { useState } from 'react';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Mini ChatGPT</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth={false} disableGutters sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
        <ConversationList onSelect={setSelectedId} />
        <Box flex={1}>
          <ChatWindow conversationId={selectedId} />
        </Box>
      </Container>
      
      <NotificationContainer />
    </ThemeProvider>
  );
}

export default App;