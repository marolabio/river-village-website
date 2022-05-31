import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

const responsive = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
};

function About() {
  return (
    <Container
      sx={{
        paddingTop: 6,
        paddingBottom: 6,
      }}
    >
      <Grid container spacing={2}>
        <Grid item {...responsive}>
          <Paper>
            <ReactPlayer
              controls
              width='100%'
              loop
              url='https://www.youtube.com/watch?v=DYvRzmNYvzQ'
            />
          </Paper>
        </Grid>
        <Grid item {...responsive}>
          <Box
            pt={2}
            sx={{
              textAlign: 'center',
              border: '1px dotted #52391D',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
            }}
          >
            <Typography variant='h3' component='h3' pb={2}>
              About River Village
            </Typography>
            <Box maxWidth='85%'>
              <Typography
                component='p'
                variant='body1'
                sx={{
                  lineHeight: '1.8',
                }}
              >
                River Village Resort is a unique spot for people to unwind with
                its native structures and village themed decorations. It
                features recreational activities such as camping, kayaking,
                fish-feeding, and fishing. There's also an in-house restaurant
                which serves delicious Filipino and Western cuisine that uses
                high quality ingredients exclusively from Bolinao's local
                market.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
