import { Paper, Typography, Box } from '@mui/material';
import { Message } from '../types';

export default function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user';
  return (
    <Box sx={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', mb: 1.5 }}>
      <Paper
        sx={{
          maxWidth: '75%',
          p: 1.5,
          bgcolor: isUser ? 'primary.main' : 'grey.100',
          color: isUser ? 'white' : 'text.primary',
          borderRadius: 2,
        }}
      >
        <Typography variant="body1" whiteSpace="pre-wrap">
          {msg.content}
        </Typography>
      </Paper>
    </Box>
  );
}