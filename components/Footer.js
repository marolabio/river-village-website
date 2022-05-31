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
import YouTubeIcon from '@mui/icons-material/YouTube';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  paddingTop: '2px',
  paddingBottom: '2px',
  color: '#6C4621',
  display: 'flex',
  alignContent: 'center',
  '.MuiSvgIcon-root': {
    paddingRight: '6px',
    color: '#6C4621',
  },
}));

const responsive = {
  xs: 12,
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4,
};

function Footer() {
  return (
    <Box mt={6} sx={{ borderTop: '1px dotted #6C4621' }}>
      <Container
        sx={{
          paddingTop: 5,
          paddingBottom: 3,
        }}
      >
        <Grid container spacing={3}>
          <Grid item {...responsive}>
            <Typography variant='h4' component='h3'>
              Contact Info
            </Typography>
            <Item>
              <LocalPhoneIcon />
              Smart 09071599157
            </Item>
            <Item>
              <EmailIcon />
              rivervillageresort2022@gmail.com
            </Item>
          </Grid>
          <Grid item {...responsive}>
            <Typography variant='h4' component='h3'>
              Address
            </Typography>
            <Item>
              <PlaceIcon />
              <Link href='https://www.google.com/maps/place/156+Patar+Rd,+Bolinao,+Pangasinan/@16.3577634,119.8159357,17z/data=!3m1!4b1!4m5!3m4!1s0x3393c995e75d72a1:0x19af4f0573ca8f0a!8m2!3d16.3577634!4d119.8181244'>
                156 Patar Road, Bolinao, Pangasinan 2406 Philippines
              </Link>
            </Item>
          </Grid>
          <Grid item {...responsive}>
            <Typography variant='h4' component='h3'>
              Business Hours
            </Typography>
            <Item>
              <AccessTimeFilledIcon />
              Monday - Sunday, 9 am - 9 pm
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 4,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Link
                  href='https://www.facebook.com/rivervillageresort'
                  target='_blank'
                >
                  <FacebookIcon sx={{ color: '#6C4621', fontSize: 26 }} />
                </Link>

                <Link
                  href='https://www.youtube.com/channel/UC7X3HnCfIcyedhh6Ezb7-IA'
                  target='_blank'
                >
                  <YouTubeIcon sx={{ color: '#6C4621', fontSize: 28 }} />
                </Link>
              </Box>
              <Typography color='primary' fontSize={14}>
                Copyright © 2022 River Village Resort
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
