import { Button, Box, Container, Typography, styled } from '@mui/material';
import Image from 'next/image';

const HeroBackground = styled(Box)({
  background: "url('/images/hero.png') center center/cover no-repeat",

  boxShadow: 'inset 0, 0, 0, 1000px rgba(0, 0, 0, 0.2)',
  objectFit: 'contain',
  color: '#FFF',
});

const Header = ({ executeScroll }) => {
  return (
    <Box sx={{ position: 'relative', color: '#FFf' }}>
      <Image
        src='/images/hero.png'
        alt='river village resort logo'
        layout='fill'
        objectFit='cover'
      />
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '90vh',
            width: '100%',
          }}
        >
          <Typography
            sx={{ position: 'relative', zIndex: 1 }}
            variant='h2'
            component='h1'
          >
            Enjoy your stay in Bolinao
          </Typography>
          <Typography
            sx={{ position: 'relative', zIndex: 1 }}
            variant='subtitle1'
            component='h2'
          >
            Eat delicious food, Relax and Experience village life
          </Typography>
          <Box mt={3}>
            <Button
              variant='outlined'
              color='inherit'
              onClick={() => {
                executeScroll();
              }}
            >
              Explore
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
