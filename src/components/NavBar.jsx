import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import Close from "../icons/Close";

function NavBar() {
  const { setIsNavbarOn } = useContext(AppContext);

  return (
    <div className="absolute top-0 left-0">
      <div className="flex flex-col w-60 h-screen px-3 py-5 bg-gray-800 border-gray-600 font-Montserrat text-white">
        <div className="flex flex-row space-x-7">
          <div
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              setIsNavbarOn((prev) => {
                return !prev;
              });
            }}
          >
            <Close />
          </div>
          <div className="text-lg font-semibold">Hi Moshe!</div>
        </div>
        <div className="flex flex-col space-y-3 mt-8 text-l">
          <Link to="/">
            <div className="hover:font-semibold cursor-pointer">Names</div>
          </Link>
          <Link to="/favorites">
          <div className="hover:font-semibold cursor-pointer">My Names</div>
          </Link>
        </div>
        <div className="grow flex flex-col justify-end">
          <div className="hover:underline cursor-pointer mb-4">
            Connect to partner
          </div>
          <Link to="/login">
          <div className="hover:font-semibold cursor-pointer">Log Out</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
