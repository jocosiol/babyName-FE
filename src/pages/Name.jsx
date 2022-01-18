import React, { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";
import NameDetailCard from "../components/NameDetailCard";
import TopBar from "../components/TopBar";
import { Link, useParams } from "react-router-dom";

function Name() {
  const { selectedName, namesArray } = useContext(AppContext);
  const [selectedNameDetail, setSelectedNameDetail] = useState();
  let params = useParams();
  const nameIndex = params.value;

  useEffect(() => {
    fetch(
      `https://baby-names-finder.p.rapidapi.com/detail/${namesArray[nameIndex]}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "baby-names-finder.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedNameDetail(data.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [selectedName, nameIndex]);

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col font-Montserrat">
      <div className="flex flex-col my-5 mx-3">
        <TopBar name="Name" />
        <NameDetailCard
          name={selectedNameDetail?.name}
          gender={selectedNameDetail?.gender}
          meaning={selectedNameDetail?.meaning}
        />
        <div className="flex flex-row space-x-3">
          <Link to={{ pathname: `/name/${+nameIndex - 1}` }} className="flex grow">
            <div className="flex grow justify-center font-semibold bg-emerald-300 hover:bg-emerald-400 border border-black mt-3 p-3 rounded cursor-pointer">
              Previous
            </div>
          </Link>
          <Link to={{ pathname: `/name/${+nameIndex + 1}` }} className="flex grow">
            <div className="flex grow justify-center font-semibold bg-emerald-300 hover:bg-emerald-400 border border-black mt-3 p-3 rounded cursor-pointer">
              Next
            </div>
          </Link>
        </div>

        <div className="flex grow justify-center font-semibold bg-red-500 hover:bg-red-600 border border-black mt-3 p-3 rounded cursor-pointer">
          Love it!
        </div>
        <Link to="/home">
          <div className="flex grow justify-center font-semibold bg-emerald-300 hover:bg-emerald-400  border border-black mt-3 p-3 rounded cursor-pointer">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Name;
