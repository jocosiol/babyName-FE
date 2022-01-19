import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

function NameCard(props) {
  const { setSelectedName, setSelectedKey } = useContext(AppContext);

  const handleNameCardClick = () => {
    setSelectedName(props.name);
    setSelectedKey(props.index);
  };
  

  return (
    <>
      {!props.favorited ? (
        <Link to={{ pathname: `/name/${props.index}` }}>
          <div
            className="flex flex-col items-center font-semibold bg-indigo-400 border border-black mt-5 py-5 rounded-xl cursor-pointer"
            onClick={handleNameCardClick}
          >
            {props.name}
          </div>
        </Link>
      ) : (
        <div
          className="flex flex-col items-center font-semibold bg-indigo-400 border border-black mt-5 py-5 rounded-xl"
          onClick={handleNameCardClick}
        >
          {props.name}
        </div>
      )}
    </>
  );
}

export default NameCard;
