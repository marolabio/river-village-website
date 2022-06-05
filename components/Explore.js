import { Box, Container, Grid, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import Link from 'next/link';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Image from '../components/Image';

const ExploreContainer = styled(Container)({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '10px',
});

const exploreData = [
  {
    id: 0,
    name: 'Restaurant',
    details:
      'Satisfy your cravings with the delicious Filipino and Western food exclusive in our restaurant. ',
    images: [
      {
        img: '/images/restaurant-front-view.jpg',
        alt: 'river village restaurant front view',
      },
      {
        img: '/images/restaurant-inside-view.jpg',
        alt: 'river village restaurant with alot of customers',
      },
    ],
  },
  {
    id: 1,
    name: 'Treehouses',
    details:
      'Relax and enjoy the view on top with picturesque river, ocean and sunset.',
    images: [
      {
        img: '/images/treehouse1.jpg',
        alt: 'river village treehouse image portrait',
      },
      {
        img: '/images/treehouse2.jpg',
        alt: 'river village treehouse side view',
      },
    ],
  },
  {
    id: 2,
    name: 'Cottages',
    details:
      'Dine or bring your own food in our cottages while watching the fishes',
    images: [
      {
        img: '/images/cottages1.jpg',
        alt: 'river village cottages view deck 2',
      },
      {
        img: '/images/cottages2.jpg',
        alt: 'river village cottages with the river',
      },
    ],
  },
  {
    id: 3,
    name: 'Kayaking',
    details:
      'Feel the excitement and  thrill of diving, swimming and kayaking!',
    images: [
      {
        img: '/images/kayak1.jpg',
        alt: 'river village kayaking image with treehouse',
      },
      { img: '/images/kayak2.jpg', alt: 'river village kayaking image' },
    ],
  },
  {
    id: 4,
    name: 'Fishing and Fish Feeding',
    details:
      'Experience the village life. Tip: You can take away your fresh catch or have it cooked in our restaurant',
    images: [
      { img: '/images/fishing1.jpg', alt: 'river village bangus fish image' },
      { img: '/images/fishing2.jpg', alt: 'river village fishing image' },
    ],
  },
  {
    id: 5,
    name: 'Camping',
    details: 'Be one with nature. Unplug and enjoy the simplicity of nature.',
    images: [
      { img: '/images/camping1.jpg', alt: 'river village camping 1 image' },
      { img: '/images/camping2.jpg', alt: 'river village camping 2 image' },
    ],
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
                  border: '2px dotted transparent',

                  '&:hover': {
                    background: 'transparent',
                  },
                  '&.Mui-selected': {
                    background: 'transparent',
                    border: '1px dotted #6C4621',
                    '&:hover': {
                      background: 'transparent',
                    },
                  },
                }}
              >
                {name}
              </MenuItem>
            ))}
          </MenuList>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Typography variant='h5' component='h5'>
            EXPLORE
          </Typography>
          <Typography variant='h3' component='h3'>
            {data.name}{' '}
            {data.id === 0 && (
              <a href='/menu' title='See Menu'>
                <span
                  style={{
                    marginBlock: 2,
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontFamily: 'open sans',
                  }}
                >
                  (See Menu)
                </span>
              </a>
            )}
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
              <Box>
                <Image
                  src={data.images[0].img}
                  alt={data.images[0].alt}
                  placeholder='blur'
                  layout='fill'
                  width={380}
                />
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
              <Box>
                <Typography component='p' variant='body1' mb={2} mt={2}>
                  {data.details}
                </Typography>
                <Image
                  src={data.images[1].img}
                  alt={data.images[1].alt}
                  placeholder='blur'
                  layout='fill'
                  width={380}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ExploreContainer>
  );
}

export default Explore;
