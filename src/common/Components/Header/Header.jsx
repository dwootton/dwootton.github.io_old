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
import Close from "@material-ui/icons/Close";
import HeaderLinks from "./HeaderLinks";
import Fade from 'react-reveal';

const Header = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar className={styles.appBar} style={{"background-color": "white"}}>
      <Toolbar className={styles.toolBar} style={{width: "100%"}}>
        <Logo />
        {/*<Hidden smDown implementation='css'>
          <HeaderLinks></HeaderLinks>
  </Hidden>*/}
          <IconButton
            style={{float: "right"}}
            color='#2a2a2a'
            aria-label='open drawer'
            onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        
      </Toolbar>
                <Hidden implementation='js'>

      <Drawer variant='temporary'  anchor={"top"} classes={styles.overlayDrawer}  open={drawerOpen} onClose={handleDrawerToggle}>
          <div className={styles.overlayDrawer}>
          <Toolbar className={styles.toolBar} style={{width: "100%"}}>
            <Fade>
              <Logo color={'white'}/>
            </Fade>
        
        {/*<Hidden smDown implementation='css'>
          <HeaderLinks></HeaderLinks>
  </Hidden>*/}
          <IconButton
            style={{float: "right", color:'#ffffff'}}
            aria-label='open drawer'
            onClick={handleDrawerToggle}>
            <Close />
          </IconButton>

      </Toolbar>
            {" "}
            <HeaderLinks onClick={handleDrawerToggle}></HeaderLinks>
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
