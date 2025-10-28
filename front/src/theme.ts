import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',  // ← Fixed: 'd' not 'i'
    },
  },
});