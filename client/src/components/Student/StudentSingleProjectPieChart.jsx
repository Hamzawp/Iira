import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  // Data entries
  const data = {
    series: [40, 30, 20, 10],
    options: {
      labels: ["JavaScript", "HTML", "CSS", "Python"],
      chart: {
        type: "pie",
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="pie"
        width="450"
        height="450"
      />
    </div>
  );
};

export default PieChart;
