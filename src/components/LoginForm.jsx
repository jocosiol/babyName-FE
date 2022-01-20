import { Link } from "react-router-dom";
import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";

function LoginForm() {
  const { userName, setUserName, password, setPassword } = useContext(LoginContext);
  function userEmail(event) {
    const email = event.target.value;
    // hacer validacion de email con regex
    {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        console.log("gola");
        return true;
      }
      // alert("You have entered an invalid email address!");
      console.log("hola2");
      return false;
    }
    setUserName(email);
  }
  function userPassword(event) {
    const password = event.target.value;
    setPassword(password);
  }
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col border-b border-black mx-10 mt-5">
        <label className="opacity-50 text-lg">Email</label>
        <input className="appearance-none bg-transparent border-none text-lg" type="text" onChange={userEmail}></input>
      </div>
      <div className="flex flex-col border-b border-black mx-10 mt-5">
        <label className="opacity-50 text-lg">Password</label>
        <input className="appearance-none bg-transparent border-none text-lg" type="password" onChange={userPassword}></input>
      </div>
      <div className="flex justify-center mt-20">
        <Link to="/">
          <div className="bg-emerald-400 hover:bg-emerald-300 cursor-pointer py-3 px-20 rounded-full text-slate-800 font-semibold">Log in</div>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
