import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Nav = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='inherit'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: 'flex', alignContent: 'center' }}
          >
            <img
              src='/images/logo.png'
              alt='river-village-logo'
              loading='lazy'
              width='100'
              height='60'
            />
          </Typography>
          <Box>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>Explore</Button>
            <Button variant='outlined' color='inherit'>
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
