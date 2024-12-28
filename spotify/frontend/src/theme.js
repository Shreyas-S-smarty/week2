import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DB954',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#fff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
