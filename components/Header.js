import { Button } from "@mui/material";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>Welcome Villagers!</h1>
      <p className={headerStyles.description}>
        Eat, Relax and enjoy native life.
      </p>
      <Button variant="primary">
        Explore
      </Button>
    </div>
  );
};

export default Header;
