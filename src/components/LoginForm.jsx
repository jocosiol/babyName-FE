import React from 'react'

function LoginForm() {
    return (
        <div className="flex flex-col justify-center">
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50 text-lg">Email</label>
          <input
            className="appearance-none bg-transparent border-none text-lg"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50 text-lg">Password</label>
          <input
            className="appearance-none bg-transparent border-none text-lg"
            type="password"
          ></input>
        </div>
        <div className="flex justify-center mt-20">
          <div className="bg-emerald-400 hover:bg-emerald-300 cursor-pointer py-3 px-20 rounded-full text-slate-800 font-semibold">
            Log in
          </div>
        </div>
        </div>
    )
}

export default LoginForm
