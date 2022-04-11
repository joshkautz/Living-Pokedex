import React from 'react';
import { logout } from "../../firebase/auth";
import styles from "./header.module.scss";
const Header = () => { 
  return (
    <header className={styles['header']}>
      <div className={styles['logo']} ><span>Living Pokedex</span></div>
      <button className={styles['signout']} onClick={logout}>Sign out</button>
    </header>
  );
};

export default Header;

