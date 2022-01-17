import React from "react";

function NameDetailCard(props) {
  return (

      <div className="flex flex-col grow p-6 rounded-lg bg-[#99C8EC] border border-black justify-center font-Montserrat mt-5">
        <div className="flex flex-col items-center">
          <h3 className="text-gray-900 text-2xl leading-tight mb-2 font-semibold">{props.name}</h3>
          <p className="text-gray-900 text-base leading-tight font-medium mb-4">{props.gender}</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-gray-900 text-base leading-tight font-medium mb-2  m-4">Meaning:</h3>
          <p className="text-center text-gray-700 text-base mb-4">{props.meaning}</p>
        </div>

        {/* <div className="flex flex-col items-center">
          <h3 className="text-gray-900 text-xl leading-tight font-medium mb-2 flex flex-col items-center m-4">Category:</h3>
          <p className="text-gray-700 text-base mb-4">{props.category}</p>
        </div> */}
      </div>
  );
}

export default NameDetailCard;
