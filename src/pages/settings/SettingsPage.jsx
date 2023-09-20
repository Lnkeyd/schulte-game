import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import styles from "./SettingsPage.module.scss";
import Settings from "../../components/settings/Settings";

const SettingsPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Settings />
      </div>
    </Layout>
  );
};

export default SettingsPage;
