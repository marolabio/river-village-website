import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';

const Nav = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            River Village Resort
          </Typography>
          <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button variant="outlined" color="inherit">
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
