import React from "react";
import Layout from "../../components/layout/Layout";
import LineChart from "../../components/lineChart/LineChart";
import styles from "./StatisticsPage.module.scss";

const StatisticsPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h3>This is Stats page</h3>
        <div className={styles.chart}>
          <LineChart />
        </div>
      </div>
    </Layout>
  );
};

export default StatisticsPage;
