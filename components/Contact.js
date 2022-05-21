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

const responsive = {
  xs: 12,
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4,
};

function Contact() {
  return (
    <Container
      sx={{
        height: '400',
        background: '#FFF',
        marginTop: '-140px',
        paddingTop: 25,
        paddingBottom: 10,
      }}
    >
      <Grid container spacing={3}>
        <Grid item {...responsive}>
          <Typography variant='h5' component='h3'>
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
              <FacebookIcon />
              facebook.com/rivervillageresort
            </Item>
          </Stack>
        </Grid>
        <Grid item {...responsive}>
          <Typography variant='h5' component='h3'>
            Address
          </Typography>
          <Item>
            <PlaceIcon />
            156 Brgy. Ilog Malino, Bolinao Pangasinan 2406 Philippines
          </Item>
        </Grid>
        <Grid item {...responsive}>
          <Typography variant='h5' component='h3'>
            Business Hours
          </Typography>
          <Item>
            <AccessTimeFilledIcon />
            Monday - Sunday, 9 am - 9 pm
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
