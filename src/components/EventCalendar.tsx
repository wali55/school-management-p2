"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: ""
    }
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white rounded-md w-full p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-xl font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
        
        
      </div>
      <div className="flex flex-col gap-2">
        <div className="border rounded-md p-4">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">Lorem, ipsum dolor sit</h1>
              <p className="text-xs text-gray-400">12:00 PM - 2:00 PM</p>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
