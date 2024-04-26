import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const GameChart = ({ dati }) => {
  const dataChart = {
    labels: dati.map((column) => {
      return column.time;
    }),
    datasets: [
      {
        label: "",
        data: dati.map((row) => {
          return row.price;
        }),
        stepped: true,
        borderColor: "#fff",
        backgroundColor: "rgba(255,255,255,0.4)",
        pointStyle: "circle",
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    legend: {
      labels: {
        color: "#fff",
      },
    },
    scales: {
      y: {
        ticks: {
          color: " #fff",
        },
        grid: {
          color: "rgba(255,255,255,0.3)",
        },
      },
      x: {
        ticks: {
          color: " #fff",
        },
        grid: {
          color: "rgba(255,255,255,0.3)",
        },
      },
    },
  };

  return (
    <div className="chart-prices">
      <Line data={dataChart} options={options} />
    </div>
  );
};

export default GameChart;
