import React from 'react'

function NameCard(props) {
    return (
        <div className="flex flex-col items-center font-semibold bg-emerald-300 border border-black mt-5 py-5 rounded">
           {props.name}
        </div>
    )
}

export default NameCard
