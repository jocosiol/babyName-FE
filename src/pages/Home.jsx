import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import AlphabetForm from "../components/AlphabetForm";
import NamePreference from "../components/NamePreference";
import TopBar from "../components/TopBar";
import NameCard from "../components/NameCard";
import NavBar from "../components/NavBar";

function Home() {
  const { letter, gender, namesArray, setNamesArray, isNavbarOn } =
    useContext(AppContext);
  const [preferenceSwitcher, setPreferenceSwitcher] = useState(true);

  useEffect(() => {
    if (!letter || !gender) return;

    fetch(`https://baby-names-finder.p.rapidapi.com/${gender}/${letter}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "baby-names-finder.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNamesArray(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [letter, gender]);

  const handleSwitcherChange = () => {
    setPreferenceSwitcher((prev) => {
      return !prev;
    });
  };

  return (
    <div className=" min-h-screen bg-yellow-200 flex flex-col font-Montserrat">
      {isNavbarOn && <NavBar />}
      <div className="my-5 mx-3">
        <TopBar name="Names" />
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
        {preferenceSwitcher && <NamePreference />}
        <div>
          <AlphabetForm />
        </div>
        <div>
          {namesArray?.map((name, index) => (
            <NameCard key={index} name={name} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
