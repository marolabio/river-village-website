import { Button, Box, Container, Typography, styled } from '@mui/material';

const HeroBackground = styled(Box)({
  background: "url('/images/hero.png') center center/cover no-repeat",
  height: '90vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: 'inset 0, 0, 0, 1000px rgba(0, 0, 0, 0.2)',
  objectFit: 'contain',
  color: '#FFF',
});

const Header = ({ executeScroll }) => {
  return (
    <HeroBackground>
      <Container>
        <Box>
          <Typography variant='h2' component='h1'>
            Enjoy your stay in Bolinao
          </Typography>
          <Typography variant='subtitle1' component='h2'>
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
    </HeroBackground>
  );
};

export default Header;
