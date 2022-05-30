import { Box, Container, Grid, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const ExploreContainer = styled(Container)({
  // background: '#F5F5F5',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '10px',
  // paddingBottom: '20px',
});

const exploreData = [
  {
    id: 0,
    name: 'Restaurant',
    details:
      'Satisfy your cravings with the delicious Filipino and Western food exclusive in our restaurant',
    images: [
      { img: '/images/restaurant1.jpg' },
      { img: '/images/restaurant2.jpg' },
    ],
  },
  {
    id: 1,
    name: 'Treehouses',
    details:
      'Relax and enjoy the view on top with picturesque river, ocean and sunset.',
    images: [
      { img: '/images/treehouse1.jpg' },
      { img: '/images/treehouse2.jpg' },
    ],
  },
  {
    id: 2,
    name: 'Cottages',
    details:
      'Dine or bring your own food in our cottages while watching the fishes',
    images: [
      { img: '/images/cottages1.jpg' },
      { img: '/images/cottages2.jpg' },
    ],
  },
  {
    id: 3,
    name: 'Kayaking',
    details:
      'Feel the excitement and  thrill of diving, swimming and kayaking!',
    images: [{ img: '/images/kayak1.jpg' }, { img: '/images/kayak2.jpg' }],
  },
  {
    id: 4,
    name: 'Fishing and Fish Feeding',
    details:
      'Experience the village life. Tip: You can take away your fresh catch or have it cooked in our restaurant',
    images: [{ img: '/images/fishing1.jpg' }, { img: '/images/fishing2.jpg' }],
  },
  {
    id: 5,
    name: 'Camping',
    details: 'Be one with nature',
    images: [{ img: '/images/camping1.jpg' }, { img: '/images/camping2.jpg' }],
  },
];

const responsive = {
  xs: 12,
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4,
};

function Explore({ myRef }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = exploreData[selectedItem];
  return (
    <ExploreContainer ref={myRef}>
      <Grid container spacing={2} mt={{ xs: 0, md: 4 }}>
        <Grid item {...responsive} mt={{ xs: 0, md: 4 }}>
          <MenuList>
            {exploreData.map(({ id, name }, index) => (
              <MenuItem
                key={id}
                selected={index === selectedItem}
                onClick={() => setSelectedItem(index)}
                disableRipple
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
                <span>{name}</span>
              </MenuItem>
            ))}
          </MenuList>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Typography
            variant='h6'
            component='h2'
            sx={{ color: '#266A2E', letterSpacing: '2px', fontSize: '1rem' }}
          >
            EXPLORE
          </Typography>
          <Typography
            variant='h1'
            component='h2'
            sx={{ color: '#FFF', fontSize: '2.5rem', color: '#6C4621' }}
          >
            {data.name}
          </Typography>
          <Grid container mt={3} mb={4}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <Box
                sx={{
                  maxWidth: {
                    xs: '100%',
                    md: 380,
                  },
                }}
              >
                <Box
                  sx={{
                    background: `url(${data.images[0].img}) no-repeat`,
                    backgroundSize: 'contain',
                    width: '100%',
                    paddingTop: '80%',
                  }}
                ></Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <Box
                sx={{
                  maxWidth: {
                    xs: '100%',
                    md: 350,
                  },
                }}
              >
                <Typography
                  component='p'
                  mt={2}
                  mb={4}
                  sx={{
                    color: '#FFF',
                    fontSize: '1rem',
                    color: '#6C4621',
                  }}
                >
                  {data.details}
                </Typography>
                <Box
                  sx={{
                    background: `url(${data.images[1].img}) no-repeat`,
                    backgroundSize: 'contain',
                    width: '100%',
                    paddingTop: '65%',
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ExploreContainer>
  );
}

export default Explore;
