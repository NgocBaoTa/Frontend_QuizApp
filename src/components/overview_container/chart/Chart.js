import React from "react";
import "./chart.css"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "2022-01-03",
    value: 20,
  },
  {
    date: "2022-01-04",
    value: 30,
  },
  {
    date: "2022-01-05",
    value: 25,
  },
  {
    date: "2022-01-06",
    value: 28,
  },
  {
    date: "2022-01-07",
    value: 20,
  },
  {
    date: "2022-01-08",
    value: 50,
  },
  {
    date: "2022-01-09",
    value: 40,
  },
  {
    date: "2022-01-10",
    value: 20,
  },
  {
    date: "2022-01-11",
    value: 35,
  },
  {
    date: "2022-01-12",
    value: 34,
  },
  {
    date: "2022-01-13",
    value: 23,
  },
  {
    date: "2022-01-14",
    value: 46,
  },
  {
    date: "2022-01-15",
    value: 39,
  },
  {
    date: "2022-01-16",
    value: 37,
  },
  {
    date: "2022-01-17",
    value: 32,
  },
  {
    date: "2022-01-18",
    value: 34,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">15-day trend</div>
      <ResponsiveContainer width="95%" aspect={1.7}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={"date"} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
