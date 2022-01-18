import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function NamePreference() {
  const { setGender } = useContext(AppContext);

  return (
    <div className="flex flex-row bg-cyan-300 justify-enter items-center space-x-3 border border-black rounded-lg my-5 p-3 font-Montserrat">
        <div
          id="male"
          className="grow flex justify-center bg-blue-400 hover:bg-blue-500 border border-black rounded-lg p-5 font-semibold cursor-pointer"
          onClick={(e) => {
            setGender(e.target.id);
          }}
        >
          Male
        </div>
        <div
          id="female"
          className="grow flex justify-center bg-pink-400 hover:bg-pink-500 border border-black rounded-lg p-5 font-semibold cursor-pointer"
          onClick={(e) => {
            setGender(e.target.id);
          }}
        >
          Female
        </div>
    </div>
  );
}

export default NamePreference;
