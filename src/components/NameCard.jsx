import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

function NameCard(props) {
  const { setSelectedName, setSelectedKey } = useContext(AppContext);

  const handleNameCardClick = () => {
    //console.log(props.name);
    setSelectedName(props.name);
    setSelectedKey(props.index);
  };

  return (
    <Link to={{ pathname: `/name/${props.index}` }}>
      <div className="flex flex-col items-center font-semibold bg-emerald-300 border border-black mt-5 py-5 rounded-xl cursor-pointer" onClick={handleNameCardClick}>
        {props.name}
      </div>
    </Link>
  );
}

export default NameCard;
