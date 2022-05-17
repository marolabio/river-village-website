import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from '../components/Layout'
import '../styles/globals.css'

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
});


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  )
}

export default MyApp
