import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Container,
  IconButton,
  SwipeableDrawer,
  styled,
  Alert,
  Snackbar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React from 'react';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  display: 'flex',
  alignContent: 'center',
  '.MuiSvgIcon-root': {
    paddingRight: '6px',
  },
  cursor: 'pointer',
}));

const Nav = ({ executeScroll }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const closeDrawer = () => setMobileOpen((prev) => !prev);
  const handleClose = () => setCopied((prev) => !prev);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' color='inherit'>
        <Container disableGutters>
          <Toolbar>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, display: 'flex', alignContent: 'center' }}
            >
              <img
                src='/images/logo.jpg'
                alt='river-village-logo'
                loading='lazy'
                width='100'
                height='60'
              />
            </Typography>

            <Item
              onClick={() => {
                navigator.clipboard.writeText('09071599157');
                setCopied(true);
              }}
            >
              <LocalPhoneIcon />
              Smart 09071599157
              <Snackbar
                open={copied}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                autoHideDuration={1000}
                onClose={handleClose}
              >
                <Alert
                  variant='filled'
                  severity='success'
                  sx={{ width: '100%' }}
                >
                  Copied
                </Alert>
              </Snackbar>
            </Item>

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
        </Container>
      </AppBar>
    </Box>
  );
};

export default Nav;
