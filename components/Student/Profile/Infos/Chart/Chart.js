import React from "react";
import { Bar } from "react-chartjs-2";

export default function Chart({ data_1, options_1 }) {
  return (
    <div>
      <Bar data={data_1} options={options_1} />
    </div>
  );
}
