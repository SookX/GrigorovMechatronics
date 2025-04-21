// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',       // or 'dark'
    primary: {
      main: '#D32F2F',    // Red 700
      light: '#FF6659',   // Red 400
      dark: '#9A0007',    // Red 900
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#757575',    // Gray 600
      light: '#A4A4A4',   // Gray 500
      dark: '#494949',    // Gray 800
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#D32F2F'
    },
    warning: {
      main: '#ED6C02'
    },
    info: {
      main: '#0288D1'
    },
    success: {
      main: '#2E7D32'
    },
    background: {
      default: '#FFFFFF',  // White background
      paper: '#FFFFFF'
    },
    text: {
      primary: '#000000',  // Black text
      secondary: '#757575' // Gray secondary text
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    }
  }
});

export default theme;
