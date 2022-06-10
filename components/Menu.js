import {
  Box,
  Tabs,
  Tab,
  Container,
  Grid,
  useMediaQuery,
  Button,
} from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Link from 'next/link';
import Image from 'next/image';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%' }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Menu({ menuData }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const mobileSize = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt={12}>
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            display: { md: 'flex', xs: 'block' },
          }}
        >
          <Tabs
            orientation={mobileSize ? 'vertical' : 'horizontal'}
            variant='scrollable'
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: 'divider',
            }}
          >
            <Tab label='Main Menu' />
            <Tab label='Boodle' />
            <Tab label='Bilao' />
            <Tab label='Snacks' />
            <Tab label='Activities' />
          </Tabs>

          {menuData.map((data) => (
            <TabPanel value={value} index={data.id} key={data.id}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Image
                    width={510}
                    height={620}
                    src={data.images[0].img}
                    alt={data.images[0].alt}
                  />
                </Grid>
                {data.images[1] && (
                  <Grid item>
                    <Image
                      width={510}
                      height={620}
                      src={data.images[1].img}
                      alt={data.images[1].alt}
                    />
                  </Grid>
                )}
              </Grid>
            </TabPanel>
          ))}
        </Box>
        <Link href='/'>
          <Button startIcon={<ArrowLeftIcon />}>Back To Home Page</Button>
        </Link>
      </Container>
    </Box>
  );
}

export default Menu;
