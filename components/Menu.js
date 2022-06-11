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
      {value === index && <Box>{children}</Box>}
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
            marginBottom: '20px',
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
              <Grid container justifyContent='center'>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <Box
                    sx={{
                      position: 'relative',
                      maxWidth: '500px',
                      height: '600px',
                      margin: 'auto',
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
                {data.images[1] && (
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Box
                      sx={{
                        position: 'relative',
                        maxWidth: '500px',
                        height: '600px',
                        margin: 'auto',
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
