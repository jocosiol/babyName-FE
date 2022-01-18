import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function NamePreference() {
  const { setGender } = useContext(AppContext);

  return (
    <div className="flex flex-col bg-cyan-300  justify-enter items-center border border-black rounded-lg my-5 py-3 font-Montserrat">
      <div className="w-64">
        <select
          className="appearance-none w-full bg-white border border-black px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          defaultValue="title"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="title">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* <div className="w-64 mt-3">
        <select
          className="appearance-none w-full bg-white border border-black px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          defaultValue="title"
        >
          <option value="title">Category</option>
          <option value="english">English</option>
          <option value="asian">Asian</option>
        </select>
      </div> */}
    </div>
  );
}

export default NamePreference;
