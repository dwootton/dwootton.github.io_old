import React from "react";
import logoSVG from "../../../Assets/Logo.svg";
import styles from "./Header.module.scss";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href={"/"}>
        <img src={logoSVG} alt={"Logo for Dylan Wootton's website"}></img>
      </a>
    </div>
  );
};

export default Logo;
