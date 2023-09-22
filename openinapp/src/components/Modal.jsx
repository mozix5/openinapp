import React, { useState } from "react";
import { useModal } from "../context/UserContext";

const Modal = () => {
  const { closeModal, addProfile } = useModal();
  const [basicDetails, setBasicDetails] = useState({
    userName: "",
    email: "",
    phone: "",
    igLink: "",
    ytLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicDetails((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const isNextEnabled =
    basicDetails.userName && basicDetails.email && basicDetails.phone;

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(basicDetails);
    closeModal();
  };

  const [isNext, setIsNext] = useState(false);

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-0 overflow-y-auto h-full w-full z-20 flex justify-center items-center">
      <div
        className="fixed inset-0 w-full h-full bg-slate-600 opacity-20"
        onClick={closeModal}
      ></div>
      <div className="w-[34%] relative rounded-2xl bg-white">
        <div className="text-lg font-semibold border-b-2 border-slate-200 text-slate-600 py-4 px-5">
          Add New Profile
        </div>
        <div className="px-5">
          <div className="flex gap-14 font-semibold">
            <div
              className={`border-b-4 flex-1 py-4 text-center ${
                !isNext && "border-blue-500"
              }`}
            >
              Basic
            </div>
            <div
              className={`border-b-4 flex-1 text-center py-4 ${
                isNext && "border-blue-500"
              }`}
            >
              Social
            </div>
          </div>

          <form className="py-1" onSubmit={handleSubmit}>
            {isNext === true ? (
              <>
                <div className="py-5 flex flex-col gap-3 ">
                  <div>
                    Enter Instagram Link{" "}
                    <span className=" text-[#a9a9a9]">(Optional)</span>
                  </div>
                  <input
                    name="igLink"
                    value={basicDetails.igLink}
                    type="url"
                    className=" border-2 border-slate-200 rounded-md w-full py-2 px-4"
                    placeholder="Eg. ..instagram.com/username"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="py-4 flex flex-col gap-3">
                  <div>
                    Youtube Link{" "}
                    <span className=" text-[#a9a9a9]">(Optional)</span>
                  </div>
                  <input
                    name="ytLink"
                    value={basicDetails.ytLink}
                    type="url"
                    className=" border-2 border-slate-200 rounded-md w-full py-2 px-4"
                    placeholder="Eg. ..youtube/username"
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    className="border-2 border-gray-400 rounded-lg px-4 py-2 my-6"
                    onClick={() => setIsNext(false)}
                  >
                    Back
                  </button>
                  <button
                    className="bg-[#3E84F8] rounded-lg text-white px-4 py-2 my-6"
                    type="submit"
                  >
                    Done
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Basic fields */}
                <div className={`py-5 flex flex-col gap-3 `}>
                  <div>Enter Name</div>
                  <input
                    required
                    name="userName"
                    value={basicDetails.userName}
                    onChange={handleChange}
                    type="text"
                    className={`border-2 border-slate-200 rounded-md w-full py-2 px-4 `}
                    placeholder="Eg. John Doe"
                  ></input>
                </div>
                <div className={`py-4 flex flex-col gap-3 `}>
                  <div>Enter Email</div>
                  <input
                    required
                    name="email"
                    value={basicDetails.email}
                    onChange={handleChange}
                    type="email"
                    className={`border-2 border-slate-200 rounded-md w-full py-2 px-4 `}
                    placeholder="Eg. john@xyz.com"
                  ></input>
                </div>
                <div className={`py-4 flex flex-col gap-3 `}>
                  <div>Enter Phone</div>
                  <input
                    required
                    name="phone"
                    value={basicDetails.phone}
                    onChange={handleChange}
                    type="tel"
                    className={` border-slate-200 border-2 rounded-md w-full py-2 px-4 `}
                    placeholder="Eg. 123456789"
                  ></input>
                </div>
                <div className="flex justify-end">
                  <button
                    className={`bg-[#3E84F8] text-white rounded-lg px-4 py-2 my-6`}
                    onClick={() => {
                      if (isNextEnabled) {
                        setIsNext(true);
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
