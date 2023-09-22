import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useGraph } from "../context/UserContext";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const BarGraph = () => {
  const { barData } = useGraph();
  return (
    <div className=" px-8 py-6  md:mx-6 mx-4 rounded-2xl bg-white h-[360px] border-slate-200 shadow-lg border-2">
      <div className="flex flex-col">
        <div>
          <span className=" font-bold text-lg">Activities</span>
        </div>
        <div className="flex justify-between mb-4 items-center">
          <div className="flex items-center">
            <span className="text-[#858585] text-sm">May - June 2021</span>
            <AiOutlineRight className=" rotate-90 text-xs mx-1 text-[#858585] " />
          </div>
          <div className="flex">
            <div className="flex items-center md:px-6">
              <div className="rounded-full bg-[#E9A0A0] h-3 w-3"></div>
              <span className="text-sm ml-2">Guest</span>
            </div>
            <div className="flex items-center md:mr-14 ml-4">
              <div className="rounded-full bg-[#9BDD7C] h-3 w-3 "></div>
              <span className="text-sm ml-2">User</span>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart
          data={barData}
          margin={{
            top: 15,
            right: 7,
            left: -25,
            bottom: 66,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: 14 }}
            interval={"preserveStartEnd"}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            style={{ fontSize: 14 }}
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]}
          />

          <Tooltip />

          <Bar dataKey="guest" fill="#E9A0A0" barSize={40} />
          <Bar dataKey="user" fill="#9BDD7C" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
