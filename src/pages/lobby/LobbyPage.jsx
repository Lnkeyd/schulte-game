import React from "react";
import styles from "./LobbyPage.module.scss";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const LobbyPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>Track your focus</h1>
          <h2 className={styles.description}>
            The Schulte table is a grid of cells with randomly arranged numbers
            (usually 5 by 5 cells). Constant training develops attention,
            concentration and speed reading.
          </h2>
          <p>
            In a classic training session, it is necessary to consistently
            recognize numbers from 1 to 25 located in different cells of the
            table. It is advisable to concentrate your gaze on the central cell
            and identify the rest with peripheral vision.
          </p>
          <Link to="/game">
            <button className={styles.button}>Start to train!</button>
          </Link>
        </div>
        <img src="/images/lobby.jpg" alt="running track numbers" />
      </div>
    </Layout>
  );
};

export default LobbyPage;
