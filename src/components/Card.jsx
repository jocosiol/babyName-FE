import React from "react";

function Card(props) {
  return (
    <div class="flex justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm  bg-[#99C8EC] border border-black">
        <div class="flex flex-col items-center">
          <h3 class="text-gray-900 text-xl leading-tight font-medium mb-2">{props.name}</h3>
          <p class="text-gray-900 text-base leading-tight font-medium mb-4">{props.gender}</p>
        </div>

        <div class="flex flex-col items-center">
          <h3 class="text-gray-900 text-xl leading-tight font-medium mb-2  m-4">Meaning:</h3>
          <p class="text-gray-700 text-base mb-4">{props.meaning}</p>
        </div>

        <div class="flex flex-col items-center">
          <h3 class="text-gray-900 text-xl leading-tight font-medium mb-2 flex flex-col items-center m-4">Category:</h3>
          <p class="text-gray-700 text-base mb-4">{props.category}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
