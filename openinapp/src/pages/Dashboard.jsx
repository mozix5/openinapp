import React, { useEffect } from "react";
import Revenue from "../components/Card";
import { revenueData } from "../data";
import Activities from "../components/BarGraph";
import Card from "../components/Profile";
import PieChartComponent from "../components/PieCharts";
import { useGraph } from "../context/UserContext";

const Dashboard = () => {
  const { cardData } = useGraph();
  let newArray = [];
  newArray = cardData.map((obj1, index1) => {
    let obj2 = revenueData.find((obj2, index2) => index1 === obj2.id);
    return { ...obj1, ...obj2 };
  });

  return (
    <div>
      <div className=" flex flex-row flex-wrap max-lg:gap-4 my-4 mx-4  md:mx-6 gap-5">
        {newArray.map((item, index) => {
          return (
            <Revenue
              title={item.name}
              amount={item.value}
              key={index}
              src={item.src}
              profit={item.profit}
            />
          );
        })}
      </div>
      <Activities />
      <div className="flex gap-4 my-4 flex-col lg:flex-row mx-4 md:mx-6">
        <PieChartComponent />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
