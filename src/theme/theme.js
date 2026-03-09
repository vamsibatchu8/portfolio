import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff2d55',
      light: '#ff6b81',
      dark: '#c0001e',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#0a0a0a',
      paper: '#111111',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
    h1: {
      fontFamily: "'Rajdhani', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: "'Rajdhani', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: "'Rajdhani', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Rajdhani', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    mono: {
      fontFamily: "'Space Mono', monospace",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 600,
          letterSpacing: '0.05em',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #ff2d55 0%, #c0001e 100%)',
          boxShadow: '0 4px 20px rgba(255, 45, 85, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #ff6b81 0%, #ff2d55 100%)',
            boxShadow: '0 6px 25px rgba(255, 45, 85, 0.6)',
          },
        },
        outlinedPrimary: {
          borderColor: '#ff2d55',
          color: '#ff2d55',
          '&:hover': {
            borderColor: '#ff6b81',
            backgroundColor: 'rgba(255, 45, 85, 0.08)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.7rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#111111',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },
  },
});

export default theme;
