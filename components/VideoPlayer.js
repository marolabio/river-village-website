import { Box, Container, Grid, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

const responsive = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
};

function VideoPlayer() {
  return (
    <Container
      sx={{
        height: '400',
        paddingTop: 6,
        paddingBottom: 6,
      }}
    >
      <Grid
        container
        spacing={10}
        sx={{
          display: 'flex',
          alignContent: 'center',
        }}
      >
        <Grid item {...responsive}>
          <ReactPlayer
            controls
            width='auto'
            loop
            url='https://www.youtube.com/watch?v=DYvRzmNYvzQ'
          />
        </Grid>
        <Grid
          item
          {...responsive}
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VideoPlayer;
