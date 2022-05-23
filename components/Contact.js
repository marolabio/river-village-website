import {
  Container,
  Typography,
  Grid,
  Stack,
  styled,
  Box,
  Link,
} from '@mui/material';
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
            <Link
              href='https://www.google.com/maps/place/156+Patar+Rd,+Bolinao,+Pangasinan/@16.3577634,119.8159357,17z/data=!3m1!4b1!4m5!3m4!1s0x3393c995e75d72a1:0x19af4f0573ca8f0a!8m2!3d16.3577634!4d119.8181244'
              underline='none'
            >
              156 Patar Road, Bolinao, Pangasinan 2406 Philippines
            </Link>
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
