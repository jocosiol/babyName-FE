import React, { useState } from "react";
import NamePreference from "../components/NamePreference";
import Bars from "../icons/Bars";

function Home() {
  const [preferenceSwitcher, setPreferenceSwitcher] = useState(true);

  const handleSwitcherChange = () => {
    setPreferenceSwitcher((prev) => {
      return !prev;
    });
  };
  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col font-Montserrat">
      <div className="my-5 mx-3">
        <div className="flex flex-row">
          <div className="w-5 h-5">
            <Bars />
          </div>
          <div className="grow flex justify-center font-semibold text-lg">
            Names
          </div>
          <div className="w-10 h-10">
            <img src="https://res.cloudinary.com/imgpetapp/image/upload/c_scale,w_148/v1642320920/babyName_logo.png" />
          </div>
        </div>
        <div className="flex flex-row justify-center mx-10 mt-5">
          <div className="form-check form-switch">
            <input
              className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault56"
              onChange={handleSwitcherChange}
              defaultChecked
            />
          </div>
          <label className="font-semibold">Name Preference</label>
        </div>
        {preferenceSwitcher && (
          <NamePreference />
        )}
        <div></div>
      </div>
    </div>
  );
}

export default Home;
