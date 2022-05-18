import { Button, Box, Container, Typography, styled } from '@mui/material';

const HeroContainer = styled(Container)({
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

const Header = () => {
  return (
    <HeroContainer>
      <Box width='auto'>
        <Typography variant='h1' component='h1'>
          Welcome Villagers!
        </Typography>
        <Typography sx={{ fontSize: '1.5rem' }} component='p'>
          Eat, Relax and enjoy native life.
        </Typography>
        <Box mt={3}>
          <Button variant='outlined' color='inherit'>
            Explore
          </Button>
        </Box>
      </Box>
    </HeroContainer>
  );
};

export default Header;
