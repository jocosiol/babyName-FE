import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TopBar from "../components/TopBar";
import NameCard from "../components/NameCard";
import NavBar from "../components/NavBar";

function Favorites() {
  const { isNavbarOn, nameToFav } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col font-Montserrat">
      {isNavbarOn && <NavBar />}
      <div className="my-5 mx-5">
        <TopBar name="Favorites" />

        <div className="flex flex-col mt-5 text-lg font-semibold">There is a match!</div>
        <NameCard name={"Name of person"} />

        <div className="flex flex-col mt-5 text-lg font-semibold">
          My favorites names
          {}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
