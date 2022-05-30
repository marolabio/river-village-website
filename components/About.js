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
              border: '2px solid #52391D',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h5' pb={2}>
              About River Village
            </Typography>
            <Box maxWidth='85%'>
              <Typography
                paragraph
                sx={{
                  lineHeight: '1.8',
                }}
              >
                River Village Resort is a unique spot for people to unwind. Its
                native structures and village themed depicts the "old town's
                folks of Bolinao's primitive living". It features recreational
                activities such as camping, kayaking, fish-feeding, and the main
                living of Bolinao's townsfolks which is fishing.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
