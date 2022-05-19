import { Container, Typography, Grid, Stack, styled, Box } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PlaceIcon from '@mui/icons-material/Place';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  display: 'flex',
  alignContent: 'center',
  '.MuiSvgIcon-root': {
    paddingRight: '6px',
  },
}));

function Contact() {
  return (
    <Container sx={{ height: '50vh', background: '#FFF' }}>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={4}>
          <Typography variant='h4' component='h2'>
            Contact Info
          </Typography>
          <Stack direction='column' mt={2}>
            <Item>
              <LocalPhoneIcon />
              Globe 09176836670
            </Item>
            <Item>
              <EmailIcon />
              rivervillageresort2022@gmail.com
            </Item>

            <Item>
              <FacebookIcon /> facebook.com/rivervillageresort
            </Item>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h4' component='h2'>
            Address
          </Typography>
          <Item>
            <PlaceIcon />
            156 Brgy. Ilog Malino, Bolinao Pangasinan 2406 Philippines
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h4' component='h2'>
            Business Hours
          </Typography>
          <Item>
            <AccessTimeFilledIcon /> Business Hours: Monday - Sunday, 9 am - 9
            pm
          </Item>
        </Grid>
      </Grid>
      <Box mt={4}>
        <img
          src='/images/logo.png'
          alt='river-village-logo'
          loading='lazy'
          width='100'
          height='60'
        />
      </Box>
    </Container>
  );
}

export default Contact;
