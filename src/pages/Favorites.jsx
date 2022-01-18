import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TopBar from "../components/TopBar";
import NameCard from "../components/NameCard";
import NavBar from "../components/NavBar";

function Favorites() {
  const { isNavbarOn } = useContext(AppContext);
  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col font-Montserrat">
      {isNavbarOn && <NavBar />}
      <div className="my-5 mx-3">
        <TopBar name="Favorites" />
        <div className="flex flex-col justify-center items-center mt-5">
          <label className="flex  ">There is a match!</label>
          <NameCard name={"Name of person"}></NameCard>
        </div>

        <div className="flex flex-col justify-center items-center mt-5">
          <label className="flex  ">My Favorites names</label>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-24 w-1/4 mb-1 rounded">
            Jessica
          </button>
          <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-24 w-1/4 mb-1 rounded">
            Marcela
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-24 w-1/4 mb-1 rounded">
            Moshe
          </button>
          <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-24 w-1/4  mb-1 rounded">
            Marcela
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-24 w-1/4 mb-1 rounded">
            Matias
          </button>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
