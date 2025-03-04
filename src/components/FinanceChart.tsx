"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1400,
  },
  {
    name: "Mar",
    income: 28000,
    expense: 2200,
  },
  {
    name: "April",
    income: 26000,
    expense: 2000,
  },
  {
    name: "May",
    income: 2800,
    expense: 3000,
  },
  {
    name: "Jun",
    income: 3200,
    expense: 2600,
  },
  {
    name: "Jul",
    income: 3400,
    expense: 2800,
  },
  {
    name: "Aug",
    income: 3600,
    expense: 3000,
  },
  {
    name: "Sep",
    income: 3800,
    expense: 2800,
  },
  {
    name: "Oct",
    income: 4000,
    expense: 3000,
  },
  {
    name: "Nov",
    income: 2600,
    expense: 2200,
  },
  {
    name: "Dec",
    income: 2400,
    expense: 2000,
  },
];

const FinanceChart = () => {
  return (
    <div className="w-full h-[450px] bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis axisLine={false} tickLine={false} tick={{fill: "#ccc"}} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} tick={{fill: "#ccc"}} />
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop: "10px", paddingBottom: "20px"}}  />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#BAE6FD"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
