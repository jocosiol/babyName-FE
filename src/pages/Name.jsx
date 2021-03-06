import React, { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";
import NameDetailCard from "../components/NameDetailCard";
import TopBar from "../components/TopBar";
import { Link, useParams } from "react-router-dom";

function Name() {
  const { selectedName, namesArray, setNameToFav } = useContext(AppContext);
  const [nameToStore, setNameToStore] = useState();
  const [selectedNameDetail, setSelectedNameDetail] = useState();
  let params = useParams();
  const nameIndex = +params.value;
  const [isPrevDisable, setIsPrevDisable] = useState(false);
  const [isNextDisable, setIsNextDisable] = useState(false);

  function addNameToFav() {
    // setNameToFav((prevArray) => [...prevArray, nameToStore]);
    setNameToFav((prevArray) => new Set([...prevArray, nameToStore]));
    // setState(previousState => new Set([...state, foo]))
  }

  useEffect(() => {
    fetch(`https://baby-names-finder.p.rapidapi.com/detail/${namesArray[nameIndex]}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "baby-names-finder.p.rapidapi.com",
        "x-rapidapi-key": "a0db223fc8mshda5ea900046c62dp1a22d8jsne3d9e0905d48",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSelectedNameDetail(data.data[0]);
        setNameToStore(data.data[0].name);
      })
      .catch((err) => {
        console.error(err);
      });

    if (nameIndex === 0) {
      setIsPrevDisable(true);
    } else {
      setIsPrevDisable(false);
    }

    if (nameIndex === namesArray.length - 1) {
      setIsNextDisable(true);
    } else {
      setIsNextDisable(false);
    }
  }, [selectedName, nameIndex, namesArray]);

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col font-Montserrat">
      <div className="flex flex-col my-5 mx-5">
        <TopBar name="Name" />
        <NameDetailCard name={selectedNameDetail?.name} gender={selectedNameDetail?.gender} meaning={selectedNameDetail?.meaning} />
        <div className="flex flex-row space-x-3">
          <Link to={{ pathname: `/name/${+nameIndex - 1}` }} className="flex grow">
            <button disabled={isPrevDisable} className={`flex grow justify-center font-semibold bg-emerald-300 border border-black mt-3 p-3 rounded  ${isPrevDisable ? "opacity-60" : "hover:bg-emerald-400 cursor-pointer"}`}>
              Previous
            </button>
          </Link>
          <Link to={{ pathname: `/name/${+nameIndex + 1}` }} className="flex grow">
            <button disabled={isNextDisable} className={`flex grow justify-center font-semibold bg-emerald-300 border border-black mt-3 p-3 rounded  ${isNextDisable ? "opacity-60" : "hover:bg-emerald-400 cursor-pointer"}`}>
              Next
            </button>
          </Link>
        </div>

        <div className="flex grow justify-center font-semibold bg-red-500 hover:bg-red-600 border border-black mt-3 p-3 rounded cursor-pointer" onClick={addNameToFav}>
          Love it!
        </div>
        <Link to="/">
          <div className="flex grow justify-center font-semibold bg-emerald-300 hover:bg-emerald-400  border border-black mt-3 p-3 rounded cursor-pointer">Back</div>
        </Link>
      </div>
    </div>
  );
}

export default Name;
