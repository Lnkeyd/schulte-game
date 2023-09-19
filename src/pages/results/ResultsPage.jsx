import React, { useEffect, useState } from "react";
import styles from "./ResultsPage.module.scss";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const ResultsPage = () => {
  const [res, setRes] = useState("");

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem("Statistics"));

    if (results) setRes(dayjs(results[results.length - 1]).format("mm.ss.ms"));
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div>Your last result is:</div>
        <h3>{res}</h3>

        <button className={styles.button}>
          <Link to="/game">Play again</Link>
        </button>

        <Link to="/statistics">Check statistics</Link>
      </div>
    </Layout>
  );
};

export default ResultsPage;
