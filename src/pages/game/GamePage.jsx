import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Timer from "../../components/timer/Timer";
import Table from "../../components/table/Table";
import styles from "./GamePage.module.scss";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

const GamePage = () => {
  const navigate = useNavigate();
  let [symbol, setSymbol] = useState(1);
  let [startDate, setStartDate] = useState(Date.now());

  useEffect(() => {
    if (symbol === 26) {
      const endDate = Date.now();

      const timeSpent = endDate - startDate;

      const LS = localStorage.getItem("Statistics")
      if (LS) {
        const arr = JSON.parse(LS)

        localStorage.setItem("Statistics", JSON.stringify([...arr, timeSpent]))
      } else {
        const arr = [timeSpent]
        localStorage.setItem("Statistics", JSON.stringify(arr));
      }

      navigate("/results");
    }
  }, [symbol]);

  function handleSpaceInput(e) {
    if (e.key === ' ') {
      setSymbol((symbol) => symbol + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleSpaceInput);
    return () => {
      window.removeEventListener("keydown", handleSpaceInput);
    };
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <Timer />

        <h2 className={styles.symbol}>{symbol !== 26 ? symbol : ""}</h2>
        <strong>Symbol to find</strong>

        <Table />

        <button className={styles.button} onClick={(e) => setSymbol((symbol) => symbol + 1)}>Found</button>
      </div>
    </Layout>
  );
};

export default GamePage;
