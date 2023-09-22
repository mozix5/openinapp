import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPieChart } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";


const Sidebar = ({ show, setter }) => {
  const { pathname } = useLocation();
  const appendClass = show ? "ml-0 " : "ml-[-280px]  md:my-6 md:ml-6";
  const MenuItem = ({ icon, title, route }) => {
    const colorClass = pathname === route ? "text-white " : " text-gray-300";
    return (
      <Link
        to={route}
        className={`flex items-center gap-3 px-8 py-2 hover:text-white  rounded-lg ${colorClass} `}
      >
        <span>{icon}</span>
        <span className=" text">{title}</span>
      </Link>
    );
  };
  const ModalOverlay = () => (
    <div
      className={`flex lg:hidden fixed  top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div
        className={`flex flex-col bg-[#4285F4] max-md:h-screen max-md:fixed z-40 w-[15rem] overflow-y-auto  p-3 md:rounded-3xl ${appendClass}`}
      >
        <div className=" text-4xl mt-8 mb-5 px-8 font-bold text-white">Board.</div>
        <div className="flex-1 flex flex-col gap-3 my-6">
          <MenuItem icon={<FiPieChart />} title="Dashboard" route="/" />
          <MenuItem icon={<BiUserCircle />} title="Users" route="/users" />
          <MenuItem
            icon={<IoPricetagsOutline />}
            title="Transactions"
            route="/transactions"
          />
          <MenuItem
            icon={<AiOutlineSchedule />}
            title="Schedules"
            route="/schedules"
          />
          <MenuItem
            icon={<IoSettingsOutline />}
            title="Settings"
            route="/settings"
          />
        </div>
        <div className="my-6 px-3 text-sm">
          <div className="my-3 px-6 cursor-pointer text-gray-300 hover:text-white">Help</div>
          <div className="px-6 cursor-pointer text-gray-300 hover:text-white">Contact Us</div>
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
};

export default Sidebar;
