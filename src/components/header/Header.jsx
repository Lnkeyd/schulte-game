import React from "react";
import Logo from "../../UI/icons/logo";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <Logo className={styles.logo}/> */}
      <h2 className={styles.logo}>
        <Link to="/">Schulte.</Link>
      </h2>
      <nav className={styles.navbar}>
        <ul className={styles.navlinks}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Link to="/game">
        <button>Training</button>
      </Link>
    </header>
  );
};

export default Header;
