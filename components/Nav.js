import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, SwipeableDrawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const Nav = ({ executeScroll }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const closeDrawer = () => setMobileOpen((prev) => !prev);

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
          {/* <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button color='inherit'>Home</Button>
            <Button
              color='inherit'
              onClick={() => {
                executeScroll();
              }}
            >
              Explore
            </Button>
            <Button variant='outlined' color='inherit'>
              Contact Us
            </Button>
          </Box> */}

          {/* <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={closeDrawer}>
              <MenuIcon color='primary' fontSize='large' />
            </IconButton>
          </Box> */}

          {/* <SwipeableDrawer
            anchor='right'
            open={mobileOpen}
            onClose={closeDrawer}
            onOpen={closeDrawer}
            PaperProps={{
              sx: {
                width: '100%',
                paddingLeft: 4,
                paddingRight: 4,
              },
            }}
          >
            <IconButton onClick={closeDrawer}>
              <CloseIcon color='primary' fontSize='large' />
            </IconButton>
            <Button color='inherit'>Home</Button>
            <Button
              color='inherit'
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              Explore
            </Button>
            <Button variant='outlined' color='inherit'>
              Contact Us
            </Button>
          </SwipeableDrawer> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
