import React from "react";

import { FcGoogle } from "react-icons/fc";
import { RiAppleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAddUser } from "../context/UserContext";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoDiscord, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Signin = () => {
  const handleClick = useAddUser();

  return (
    <>
      <div className="flex lg:flex-row h-screen w-screen flex-col">
        <div className="bg-[#4285F4] text-white lg:w-[45%] flex items-center justify-center flex-col max-lg:h-28 lg:-skew-x-6 origin-top ">
          <div className="text-6xl font-bold lg:skew-x-6">Board.</div>

          <div className=" lg:flex lg:skew-x-6 justify-between items-center text-4xl hidden bottom-12 absolute left-44 gap-8 xl:left-52">
            <IoLogoGithub className=" cursor-pointer hover:scale-125 transition" />
            <AiFillTwitterCircle className=" cursor-pointer hover:scale-125 transition" />
            <IoLogoLinkedin className=" cursor-pointer hover:scale-125 transition" />
            <IoLogoDiscord className=" cursor-pointer hover:scale-125 transition" />
          </div>
        </div>
        <div className="  flex-1 flex items-center justify-center flex-col">
          <div className="mb-5 md:w-[50%] w-[70%]">
            <div className=" ">
              <div className="text-2xl font-bold">Sign In</div>
              <div className="pt-2 font-medium">Sign in to your account</div>
            </div>
            <div className=" flex justify-between mt-6 gap-4">
              <button
                className="rounded-lg px-4 bg-white flex-1 h-8 flex items-center justify-center gap-2"
                onClick={handleClick}
              >
                <FcGoogle />
                <span className="text-[#858585] max-xl:hidden text-xs">
                  Sign in with Google
                </span>
              </button>
              <button
                className="rounded-lg px-4 bg-white flex-1 h-8 flex items-center justify-center gap-2"
                onClick={handleClick}
              >
                <RiAppleFill />
                <span className="text-[#858585] text-xs max-xl:hidden">
                  Sign in with Apple
                </span>
              </button>
            </div>
          </div>
          <div className=" bg-white h-[]  md:w-[50%] w-[70%] p-7 rounded-xl">
            <form>
              <div className="flex flex-col gap-2">
                <span>Email address</span>
                <input
                  type="text"
                  placeholder="email..."
                  className="active:outline-none focus:outline-none rounded-lg px-4 h-8 bg-[#F5F5F5] focus:bg-[#EAEAEA]"
                />
              </div>
              <div className="flex flex-col gap-2 my-6">
                <span>Password</span>
                <input
                  type="text"
                  placeholder="password..."
                  className="active:outline-none focus:outline-none rounded-lg px-4 h-8 bg-[#F5F5F5] focus:bg-[#EAEAEA]"
                />
              </div>
              <div className="text-[#346BD4]">Forgot Password?</div>
              <button
                className="bg-[#4285F4] text-white mt-6 h-8 rounded-lg w-[100%] font-bold"
                onClick={handleClick}
              >
                Sign in
              </button>
            </form>
          </div>
          <div className="mt-6">
            <span>Dont have an account? </span>
            <Link to="/register" className="text-[#346BD4]">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
