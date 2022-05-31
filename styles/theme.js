import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#52391D',
      darker: '#4A2F14',
    },
  },
  typography: {
    fontFamily: ['sans-serif', 'Open Sans'].join(','),
    color: '#6C4621',

    h1: {
      fontFamily: 'Playfair Display',
    },
    h2: {
      fontFamily: 'Playfair Display',
    },
    h3: {
      fontFamily: 'Playfair Display',
      fontSize: '1.8rem',
      color: '#6C4621',
    },
    h4: {
      fontFamily: 'Playfair Display',
      fontSize: '1.2rem',
      color: '#6C4621',
      marginBottom: '12px',
    },
    h5: {
      color: '#7A7A7A',
      letterSpacing: '2px',
      fontSize: '.8rem',
    },
    subtitle1: {
      fontSize: '1.2rem',
    },
    body1: {
      color: '#6C4621',
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
