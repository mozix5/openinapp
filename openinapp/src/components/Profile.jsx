import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "./Modal";
import { useModal } from "../context/UserContext";
import wa from "../assets/wa.png";
import ig from "../assets/ig.png";
import yt from "../assets/yt.png";
import em from "../assets/email.png";
const Profile = () => {
  const { isOpen, openModal, userProfile } = useModal();
  return (
    <>
      {isOpen && <Modal />}
      <div className=" bg-white rounded-2xl flex-1 py-6 px-8 min min-w-[50%] border-2 border-slate-200 shadow-lg">
        {userProfile === "" ? (
          <div className="flex justify-center items-center h-full flex-col gap-4">
            <div
              className="h-24 w-24 bg-gray-200 rounded-full flex justify-center items-center  text-slate-400 cursor-pointer"
              onClick={openModal}
            >
              <HiOutlinePlus className="text-5xl" />
            </div>
            <div className=" font-semibold">Add Profile</div>
          </div>
        ) : (
          <div className=" py-4 px-2">
            <div className=" capitalize text-xl font-semibold">
              {userProfile.userName}
            </div>
            <div className=" grid grid-flow-row grid-cols-1 gap-6 pt-8 lg:grid-cols-2">
              <div className="flex items-center gap-5">
                <img src={wa} className="h-11 "></img>
                <div className="text-xs">{userProfile.phone}</div>
              </div>
              <div className="flex items-center gap-5">
                {userProfile.igLink && (
                  <>
                    <img src={ig} className="h-11 "></img>
                    <div className=" break-all text-xs">
                      {userProfile.igLink}
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center gap-5  ">
                <img src={em} className="h-11"></img>
                <div
                  className={` text-xs ${userProfile.ytLink && "break-all"}`}
                >
                  {userProfile.email}
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                {userProfile.ytLink && (
                  <>
                    {" "}
                    <img src={yt} className="h-11 "></img>
                    <div className={`break-all text-xs `}>
                      {userProfile.ytLink}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
