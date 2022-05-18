import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  styled,
  Typography,
  ImageList,
  ImageListItem,
} from '@mui/material';
import React from 'react';

const ExploreContainer = styled(Container)({
  background: '#F5F5F5',
  height: 'auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '10px',
  paddingBottom: '20px',
});

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
];

function Explore() {
  return (
    <ExploreContainer>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={4}>
          <Stack direction='column' mt={6}>
            <Item>Restaurant</Item>
            <Item>Treehouse</Item>
            <Item>Cottage</Item>
            <Item>Kayaking</Item>
            <Item>Fishing and Fish Feeding</Item>
            <Item>Camping</Item>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Typography variant='h4' component='h2'>
            Explore
          </Typography>
          <Box sx={{ width: 700, height: 450 }}>
            <ImageList cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading='lazy'
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
      </Grid>
    </ExploreContainer>
  );
}

export default Explore;
