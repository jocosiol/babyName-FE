import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Bars from "../icons/Bars";

function TopBar(props) {
  const { setIsNavbarOn } = useContext(AppContext);

  return (
    <div className="flex flex-row">
      {props.name !== "Name" && (
        <div
          className="w-5 h-5 cursor-pointer"
          onClick={() => {
            setIsNavbarOn((prev) => {
              return !prev;
            });
          }}
        >
          <Bars />
        </div>
      )}
      <div className="grow flex justify-center font-semibold text-lg">
        {props.name}
      </div>
      <div className="w-10 h-10">
        <img alt="logo" src="https://res.cloudinary.com/imgpetapp/image/upload/c_scale,w_148/v1642320920/babyName_logo.png" />
      </div>
    </div>
  );
}

export default TopBar;
