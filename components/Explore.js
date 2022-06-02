import { Box, Container, Grid, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ModalImage from 'react-modal-image';

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
      'Satisfy your cravings with the delicious Filipino and Western food exclusive in our restaurant',
    images: [
      { img: '/images/restaurant1.jpg', title: 'river village restaurant' },
      { img: '/images/restaurant2.jpg', title: 'river village restaurant' },
    ],
  },
  {
    id: 1,
    name: 'Treehouses',
    details:
      'Relax and enjoy the view on top with picturesque river, ocean and sunset.',
    images: [
      { img: '/images/treehouse1.jpg', title: 'river village treehouse' },
      { img: '/images/treehouse2.jpg', title: 'river village treehouse' },
    ],
  },
  {
    id: 2,
    name: 'Cottages',
    details:
      'Dine or bring your own food in our cottages while watching the fishes',
    images: [
      { img: '/images/cottages1.jpg', title: 'river village cottages' },
      { img: '/images/cottages2.jpg', title: 'river village cottages' },
    ],
  },
  {
    id: 3,
    name: 'Kayaking',
    details:
      'Feel the excitement and  thrill of diving, swimming and kayaking!',
    images: [
      { img: '/images/kayak1.jpg', title: 'river village kayaking' },
      { img: '/images/kayak2.jpg', title: 'river village kayaking' },
    ],
  },
  {
    id: 4,
    name: 'Fishing and Fish Feeding',
    details:
      'Experience the village life. Tip: You can take away your fresh catch or have it cooked in our restaurant',
    images: [
      { img: '/images/fishing1.jpg', title: 'river village bangus fish' },
      { img: '/images/fishing2.jpg', title: 'river village fishing' },
    ],
  },
  {
    id: 5,
    name: 'Camping',
    details: 'Be one with nature. Unplug and enjoy the simplicity of nature.',
    images: [
      { img: '/images/camping1.jpg', title: 'river village camping' },
      { img: '/images/camping2.jpg', title: 'river village camping' },
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
                  // paddingLeft: 0,
                  // paddingRight: 0,
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
                {/* <Box
                  sx={{
                    background: `url(${data.images[0].img}) no-repeat`,
                    backgroundSize: 'contain',
                    width: '100%',
                    paddingTop: '80%',
                  }}
                ></Box> */}
                <ModalImage
                  large={data.images[0].img}
                  small={data.images[0].img}
                  alt={data.images[0].alt}
                  width='100%'
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
              <Box
                sx={{
                  maxWidth: {
                    xs: '100%',
                    md: 350,
                  },
                }}
              >
                <Typography component='p' variant='body1' mb={2} mt={2}>
                  {data.details}
                </Typography>
                {/* <Box
                  sx={{
                    background: `url(${data.images[1].img}) no-repeat`,
                    backgroundSize: 'contain',
                    width: '100%',
                    paddingTop: '65%',
                  }}
                ></Box> */}
                <ModalImage
                  large={data.images[1].img}
                  small={data.images[1].img}
                  alt={data.images[1].alt}
                  width='100%'
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
