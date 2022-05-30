import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#52391D',
      darker: '#4A2F14',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Open Sans',
      'Playfair Display',
    ].join(','),
    body1: {
      fontFamily: 'Open Sans, sans-serif',
    },
    h1: {
      fontFamily: 'Playfair Display',
    },
    h5: {
      fontFamily: 'Playfair Display',
      color: '#52391D',
      paddingLeft: 12,
    },
    h4: {
      fontFamily: 'Playfair Display',
      color: '#52391D',
    },
    h6: {
      fontFamily: 'Playfair Display',
      color: '#52391D',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
      defaultProps: {
        maxWidth: 'xl',
      },
    },
  },
});

export default theme;
