import React from "react";
const Card = (props) => {
  // console.log(col);
  return (
    <>
      <div className=" rounded-2xl p-5 flex-1 border-2 border-slate-200 shadow-lg flex flex-col justify-between bg-white">
        <div className="h-8 w-8">
          <img src={props.src} className=" object-cover " alt="icon" />
        </div>
        <div className=" text-sm font-normal py-1 md:mt-1">{props.title}</div>
        <div className="flex justify-between items-center">
          <div className=" text-2xl font-bold">{props.amount}</div>
          <div className=" bg-green-100 rounded-xl px-3 py-1 text-xs text-green-400 font-semibold">
            +{props.profit}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
