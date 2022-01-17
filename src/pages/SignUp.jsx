import React, { useState } from "react";
import LeftArrow from "../icons/LeftArrow";

function SignUp() {
  const [connectToPartnerSwitcher, setConnectToPartnerSwitcher] = useState(false);

  const handleSwitcherChange = () => {
    setConnectToPartnerSwitcher((prev) => {
      return !prev;
    });
  };

  return (
    <div className="min-h-screen bg-yellow-200 py-6 flex flex-col justify-center font-Montserrat">
      <div className="w-5 h-5 mx-10 mt-1 ">
        <LeftArrow />
      </div>
      <div className="flex grow flex-col justify-center items-center mb-10">
        <img src="https://res.cloudinary.com/imgpetapp/image/upload/c_scale,w_148/v1642320920/babyName_logo.png" />
        <div className="text-teal-600 text-3xl font-bold">Baby Name</div>
      </div>
      <form className="flex flex-col justify-center">
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Name</label>
          <input className="appearance-none bg-transparent border-none" type="text"></input>
        </div>
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Email</label>
          <input className="appearance-none bg-transparent border-none" type="password"></input>
        </div>
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Password</label>
          <input className="appearance-none bg-transparent border-none" type="password"></input>
        </div>
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Retype Password</label>
          <input className="appearance-none bg-transparent border-none" type="password"></input>
        </div>
        <div className="flex flex-row mx-10 mt-5">
          <div className="form-check form-switch">
            <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault56" onChange={handleSwitcherChange} />
          </div>
          <label className="opacity-50">Connect to partner</label>
        </div>

        {connectToPartnerSwitcher && (
          <div className="flex flex-col border-b border-black mx-10 mt-5">
            <label className="opacity-50">Partner key</label>
            <input className="appearance-none bg-transparent border-none" type="password"></input>
          </div>
        )}

        <div className="flex justify-center mt-20">
          <button className="bg-emerald-400 hover:bg-emerald-300 cursor-pointer py-3 px-20 rounded-full text-slate-800 font-semibold">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
