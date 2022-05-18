import { Box } from '@mui/material';
import Nav from './Nav';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
