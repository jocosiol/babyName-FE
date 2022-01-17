import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function NamePreference() {
  const { setGender } = useContext(AppContext);



  return (
    <div className="flex flex-col bg-cyan-300  justify-enter items-center border border-black rounded-lg my-5 py-3 font-Montserrat">
      <div>
        <div className="inline-block relative w-64">
          <select
            className="block appearance-none w-full bg-white border border-black px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="title" onChange={(e) => {
              setGender(e.target.value)
            }}
          >
            <option value="title">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div className="inline-block relative w-64 mt-3">
          <select
            className="block appearance-none w-full bg-white border border-black px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="title"
          >
            <option value="title">Category</option>
            <option value="english">English</option>
            <option value="asian">Asian</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NamePreference;
