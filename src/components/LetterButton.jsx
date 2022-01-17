import React from "react";

function LetterButton(props) {
  return (
    <div className="flex grow p-2 font-semibold hover:bg-purple-400 cursor-pointer">
      {props.letter}
    </div>
  );
}

export default LetterButton;
