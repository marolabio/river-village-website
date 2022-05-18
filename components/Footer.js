import { Container, Typography, Grid, Stack, styled, Box } from '@mui/material';
import Image from 'next/image';

function Footer() {
  return (
    <Container
      sx={{
        padding: '24px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        background: '#F5F5F5',
      }}
    >
      <Image
        src='/images/logo.png'
        alt='river-village-logo'
        loading='lazy'
        width='100'
        height='60'
      />

      <Typography component='p'>
        Copyright © 2022 River Village Resort
      </Typography>
    </Container>
  );
}

export default Footer;
