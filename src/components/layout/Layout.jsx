import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
