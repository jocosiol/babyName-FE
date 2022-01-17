import React from 'react'

function LetterButton(props) {
    return (
        <div className="flex grow border border-black p-2">
            {props.letter}
        </div>
    )
}

export default LetterButton
