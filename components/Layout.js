import { Box } from '@mui/material';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
