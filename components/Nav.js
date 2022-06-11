import {
  Container,
  styled,
  Alert,
  Snackbar,
  Toolbar,
  Box,
  AppBar,
  Grid,
} from '@mui/material';
import Link from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';
import * as ga from '../lib/ga';
import Image from 'next/image';

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

  const handleCopy = () => {
    navigator.clipboard.writeText('09071599157');
    setCopied(true);
    ga.event({
      action: 'Copy Button Clicked',
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' color='inherit'>
        <Container disableGutters>
          <Toolbar>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <Grid item sx={{ cursor: 'pointer' }}>
                <Link href='/'>
                  <Image
                    src='/images/river-village-logo.jpg'
                    alt='river-village-logo'
                    width={100}
                    height={50}
                    objectFit='contain'
                  />
                </Link>
              </Grid>

              <Grid item>
                <Item onClick={() => handleCopy()}>
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
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Nav;
