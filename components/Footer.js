import {
  Container,
  Typography,
  Grid,
  Stack,
  styled,
  Box,
  Link,
  Button,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as ga from '../lib/ga';

const Item = styled(Box)(({ theme }) => ({
  fontSize: '1rem',
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
  const handleRedirect = () => {
    window.open('https://goo.gl/maps/BPGjiRUDc4xMS1wt6', '_ blank');

    ga.event({
      action: 'Address Link Clicked',
    });
  };

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
            <Item>Smart 09071599157</Item>
            <Item>rivervillageresort2022@gmail.com</Item>
          </Grid>
          <Grid item {...responsive}>
            <Typography variant='h4' component='h3'>
              Address
            </Typography>
            <Item>
              <Link onClick={() => handleRedirect()}>
                156 Patar Road, Bolinao, Pangasinan 2406 Philippines
              </Link>
            </Item>
          </Grid>
          <Grid item {...responsive}>
            <Typography variant='h4' component='h3'>
              Business Hours
            </Typography>
            <Item>Monday - Sunday, 9 am - 9 pm</Item>
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
                <Link
                  href='https://www.instagram.com/rivervillageresort/'
                  target='_blank'
                >
                  <InstagramIcon sx={{ color: '#6C4621', fontSize: 26 }} />
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
