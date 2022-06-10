import { Box, Container, Grid, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
// import Image from './Image';
import Image from 'next/image';

const ExploreContainer = styled(Container)({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '10px',
});

const responsive = {
  xs: 12,
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4,
};

function Explore({ myRef, exploreData }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = exploreData ? exploreData[selectedItem] : [];
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
              <Box
                sx={{
                  position: 'relative',
                  width: '380px',
                  height: '300px',
                }}
              >
                <Image
                  src={data.images[0].img}
                  alt={data.images[0].alt}
                  layout='fill'
                  objectFit='contain'
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
              <Typography component='p' variant='body1' mb={2} mt={2}>
                {data.details}
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  width: '380px',
                  height: '300px',
                }}
              >
                <Image
                  src={data.images[1].img}
                  alt={data.images[1].alt}
                  layout='fill'
                  objectFit='contain'
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
