import { ThemeProvider } from '@mui/material/styles';
import Layout from '../components/Layout';
import '../styles/globals.css';
import theme from '../styles/theme';
import { analytics } from '../config/firebaseConfig';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.logEvent({ eventName: 'Visited' });
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
