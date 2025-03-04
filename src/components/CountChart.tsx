"use client";

import Image from "next/image";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 2000,
    fill: "#fff",
  },
  {
    name: "Girls",
    count: 1000,
    fill: "#FEF08A",
  },
  {
    name: "Boys",
    count: 1000,
    fill: "#BAE6FD",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-md p-4 h-[450px] flex flex-col gap-4 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="70%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="90%"
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src="/maleFemale.png" alt="" width={40} height={40} />
      </div>

      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-2">
          <div className="bg-sky-200 size-5 rounded-full" />
          <h1 className="text-xl font-semibold">1000</h1>
          <p className="text-xs text-gray-400">Boys (50%)</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-yellow-200 size-5 rounded-full" />
          <h1 className="text-xl font-semibold">1000</h1>
          <p className="text-xs text-gray-400">Girls (50%)</p>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
