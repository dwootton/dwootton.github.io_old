import React, {useState} from "react";
import Logo from "./HeaderLogo";
/*import Menu from "./Menu";*/
import styles from "./Header.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import HeaderLinks from "./HeaderLinks";

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={styles.appBar} style={{"background-color": "white"}}>
      <Toolbar className={styles.toolBar} style={{width: "100%"}}>
        <Logo />
        <Hidden smDown implementation='css'>
          <HeaderLinks></HeaderLinks>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            style={{float: "right"}}
            color='#2a2a2a'
            aria-label='open drawer'
            onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation='js'>
        <Drawer variant='temporary' anchor={"top"} open={mobileOpen} onClose={handleDrawerToggle}>
          <div>
            {" "}
            <HeaderLinks></HeaderLinks>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

Header.defaultProp = {
  color: "white",
};

export default Header;
