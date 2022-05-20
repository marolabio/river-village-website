<Grid container mt={3}>
  <Grid item xs={6}>
    <Box
      sx={{
        width: 350,
        height: 400,
        backgroundColor: 'primary.dark',
      }}
    >
      <img
        src='/images/restaurant2.jpg'
        alt='river-village-logo'
        loading='lazy'
        width='350'
        height='400'
      />
    </Box>
  </Grid>
  <Grid
    item
    xs={6}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}
  >
    <Typography
      component='p'
      mb={2}
      sx={{ color: '#FFF', fontSize: '1rem', color: '#6C4621' }}
    >
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s.
    </Typography>
    <Box
      sx={{
        width: 350,
        height: 250,
        background: 'url(/images/restaurant1.jpg) no-repeat',
        objectFit: 'cover',
      }}
    >
      <img
        src='/images/restaurant1.jpg'
        alt='river-village-logo'
        loading='lazy'
        width='350'
        height='auto'
      />
    </Box>
  </Grid>
</Grid>;
