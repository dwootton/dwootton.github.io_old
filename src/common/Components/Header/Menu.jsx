import React from "react";
import styles from "./Header.module.scss";

const Menu = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li className={styles.menuItem}>
          <a href={"/about"}>About</a>
        </li>
        <li className={styles.menuItem}>
          <a href={"/blog"}>Blog</a>
        </li>
        <li className={styles.menuItem}>
          <ul className={styles.social}></ul>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
