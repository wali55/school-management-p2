"use client";

import Image from "next/image";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#B8E6FE" },
  { name: "Group B", value: 8, fill: "#FFF085" },
];

const Performance = () => {
  return (
    <div className="bg-white rounded-md p-4 h-80 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <span className="text-xs text-gray-500">of max 10 WTS</span>
      </div>
      <div className="absolute left-0 right-0 bottom-20 text-center">
        <h2 className="text-lg font-semibold">1st Semester - 2nd Semester</h2>
      </div>
    </div>
  );
};

export default Performance;
