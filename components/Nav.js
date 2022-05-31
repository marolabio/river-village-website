import {
  Container,
  styled,
  Alert,
  Snackbar,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  display: 'flex',
  alignContent: 'center',
  '.MuiSvgIcon-root': {
    paddingRight: '6px',
  },
  cursor: 'pointer',
}));

const Nav = () => {
  const [copied, setCopied] = useState(false);
  const handleClose = () => setCopied((prev) => !prev);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' color='inherit'>
        <Container disableGutters>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center' }}>
              <img
                src='/images/logo.jpg'
                alt='river-village-logo'
                loading='lazy'
                width='100'
                height='50'
              />
            </Box>

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
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Nav;
