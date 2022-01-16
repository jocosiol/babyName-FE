import React from 'react'
import Bars from '../icons/Bars'

function TopBar(props) {
    return (
        <div className="flex flex-row">
        <div className="w-5 h-5">
          <Bars />
        </div>
        <div className="grow flex justify-center font-semibold text-lg">
          {props.name}
        </div>
        <div className="w-10 h-10">
          <img src="https://res.cloudinary.com/imgpetapp/image/upload/c_scale,w_148/v1642320920/babyName_logo.png" />
        </div>
      </div>
    )
}

export default TopBar
