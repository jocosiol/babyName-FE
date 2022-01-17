import React from "react";
import LetterButton from "./LetterButton";

function AlphabetForm() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="flex flex-row bg-purple-300 justify-center flex-wrap border border-black rounded-lg my-5 p-3 font-Montserrat">
      {alphabet.map((item, index) => (
        <LetterButton key={index} letter={item} />
      ))}
    </div>
  );
}

export default AlphabetForm;
