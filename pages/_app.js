import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from '../components/Layout';
import '../styles/globals.css';

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
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
