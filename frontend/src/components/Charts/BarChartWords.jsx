import React from "react";
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const BarChartWords = ({ data }) => {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 10,
          bottom: 20,
        }}>
        <XAxis dataKey="name" stroke="#29d5a4" />
        <YAxis stroke="#2b9cd5" />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: 'red' }} />
        <Bar
          dataKey="uv"
          fill="#9f2398"
          activeBar={<Rectangle fill="#9f2398" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWords;
