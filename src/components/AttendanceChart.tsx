"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 1200,
    absent: 800,
  },
  {
    name: "Tue",
    present: 1400,
    absent: 600,
  },
  {
    name: "Wed",
    present: 1600,
    absent: 400,
  },
  {
    name: "Thu",
    present: 1800,
    absent: 200,
  },
  {
    name: "Fri",
    present: 1000,
    absent: 1000,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-md p-4 flex-1 h-[450px]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" vertical={false} />
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{borderRadius: "20px"}} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}} />
          <Bar
            dataKey="present"
            fill="#FEF08A"
            barSize={20}
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
          <Bar
            dataKey="absent"
            fill="#BAE6FD"
            barSize={20}
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
