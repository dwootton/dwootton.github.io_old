import React from "react";
import Logo from "./HeaderLogo";
import Menu from "./Menu";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <Logo></Logo>
      <Menu></Menu>
    </div>
  );
};

export default Header;
