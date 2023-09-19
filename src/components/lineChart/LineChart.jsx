import React, { useEffect, useState } from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./LineChart.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.color = "#1f1f1f";

const LineChart = () => {
  let attempts = [];
  let values = [];

  try {
    const storageData = localStorage.getItem("Statistics");
    if (storageData) {
      const parsed = JSON.parse(storageData);
      if (parsed) {
        const mapped = parsed.map((item) => item / 1000);
        values = mapped;
      }

      attempts = [...Array(parsed.length).keys()].map((item) => item + 1);
      console.log(attempts);
    }
  } catch (err) {
    console.log(err);
  }

  const data = {
    labels: attempts,
    datasets: [
      {
        label: "Time, sec",
        data: values,
        borderColor: "#96badb",
        backgroundColor: "#C5DDF4",
        // borderDash: [5, 5],
        pointBackgroundColor: "#96badb",
        pointBorderColor: "#96badb",
        pointHoverBackgroundColor: "#C5DDF4",
        pointHoverBorderColor: "#C5DDF4",
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        title: {
          display: true,
          text: "Time, sec",
          font: {
            size: 16,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Attempt number",
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.lineChart}>
      <Line data={data} options={options} />;
    </div>
  );
};

export default LineChart;
