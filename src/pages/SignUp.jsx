import React from "react";

function SignUp() {
  return (
    <div className="min-h-screen bg-yellow-200 py-6 flex flex-col items-center justify-center	">
      <form className="flex flex-col justify-center">
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Name</label>
          <input className="appearance-none bg-transparent border-none" type="text"></input>
        </div>
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Email</label>
          <input className="appearance-none bg-transparent border-none" type="password"></input>
        </div>
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Password</label>
          <input className="appearance-none bg-transparent border-none" type="password"></input>
        </div>
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Password</label>
          <input className="appearance-none bg-transparent border-none" type="password"></input>
        </div>

        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Partner key</label>
          <input className="appearance-none bg-transparent border-none" type="password"></input>
        </div>
        <div className="flex justify-center mt-20">
          <button className="bg-emerald-400 py-3 px-20 rounded-full text-slate-800 font-semibold">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
