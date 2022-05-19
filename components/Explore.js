import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Image from 'next/image';

const ExploreContainer = styled(Container)({
  background: '#F5F5F5',
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '10px',
  paddingBottom: '20px',
});

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

const MenuItems = [
  'Restaurant',
  'Treehouse',
  'Cottage',
  'Kayaking',
  'Fishing and Fish Feeding',
  'Camping',
];

function Explore() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <ExploreContainer>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={4} mt={4}>
          <MenuList>
            {MenuItems.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedItem}
                onClick={() => setSelectedItem(index)}
                disableRipple
                fullWidth='false'
                sx={{
                  display: 'table',
                  paddingLeft: 0,
                  paddingRight: 0,
                  borderBottom: '2px solid transparent',

                  '&:hover': {
                    background: 'transparent',
                  },
                  '&.Mui-selected': {
                    background: 'transparent',
                    borderBottom: '2px solid #6C4621',
                    '&:hover': {
                      background: 'transparent',
                    },
                  },
                }}
              >
                {option}
              </MenuItem>
            ))}
          </MenuList>
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant='h6'
            component='h2'
            sx={{ color: '#6C4621', letterSpacing: '2px', fontSize: '1rem' }}
          >
            EXPLORE
          </Typography>
          <Typography
            variant='h1'
            component='h2'
            sx={{ color: '#FFF', fontSize: '2.5rem', color: '#6C4621' }}
          >
            {MenuItems[selectedItem]}
          </Typography>
          <Grid container mt={3}>
            <Grid item xs={6}>
              <Box
                sx={{
                  width: 350,
                  height: 400,
                  backgroundColor: 'primary.dark',
                }}
              >
                {/* <img
                  src={`${itemData[0].img}`}
                  srcSet={`${itemData[0].img}`}
                  alt={itemData[0].title}
                  height='auto'
                  width='100%'
                /> */}
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
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </Typography>
              <Box
                sx={{
                  width: 350,
                  height: 250,
                  backgroundColor: 'primary.dark',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ExploreContainer>
  );
}

export default Explore;
