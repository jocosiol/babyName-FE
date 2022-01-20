import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../icons/LeftArrow";

function SignUp() {
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [connectToPartnerSwitcher, setConnectToPartnerSwitcher] =
    useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    partnerKey: "",
  });

  const handleSwitcherChange = () => {
    setConnectToPartnerSwitcher((prev) => {
      return !prev;
    });
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (newUser.email !== "") {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(newUser.email)) {
        setEmailError(true);
      }else setEmailError(false);
    }
    if (newUser.password !== newUser.repassword) {
      setPassError(true);
    } else setPassError(false);
  }, [newUser]);

  const handleSignUp = () => {

  }

  return (
    <div className="min-h-screen bg-yellow-200 py-6 flex flex-col justify-center font-Montserrat">
      <div className="w-5 h-5 mx-10 mt-1 ">
        <Link to="/login">
        <LeftArrow />
        </Link>
      </div>
      <div className="flex grow flex-col justify-center items-center mb-10">
        <img
          src="https://res.cloudinary.com/imgpetapp/image/upload/c_scale,w_148/v1642320920/babyName_logo.png"
          alt="logo"
        />
        <div className="text-teal-600 text-3xl font-bold">Name-ache</div>
      </div>
      <form className="flex flex-col justify-center">
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Name</label>
          <input
            name="name"
            className="appearance-none bg-transparent border-none"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Email</label>
          <input
            name="email"
            className="appearance-none bg-transparent border-none"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        {emailError && (
          <div
            className="bg-red-100 rounded-lg py-5 px-6 mx-10 mt-5 text-base text-red-700"
            role="alert"
          >
            Please enter valid email address.
          </div>
        )}
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Password</label>
          <input
            name="password"
            className="appearance-none bg-transparent border-none"
            type="password"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col border-b border-black mx-10 mt-5">
          <label className="opacity-50">Retype Password</label>
          <input
            name="repassword"
            className="appearance-none bg-transparent border-none"
            type="password"
            onChange={handleChange}
          ></input>
        </div>
        {passError && (
          <div
            className="bg-red-100 rounded-lg py-5 px-6 mx-10 mt-5 text-base text-red-700"
            role="alert"
          >
            Passwords don't match. Please try again
          </div>
        )}
        <div className="flex flex-row mx-10 mt-5">
          <div className="form-check form-switch">
            <input
              className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault56"
              onChange={handleSwitcherChange}
            />
          </div>
          <label className="opacity-50">Connect to partner</label>
        </div>

        {connectToPartnerSwitcher && (
          <div className="flex flex-col border-b border-black mx-10 mt-5">
            <label className="opacity-50">Partner key</label>
            <input
              name="partnerKey"
              className="appearance-none bg-transparent border-none"
              type="password"
              onChange={handleChange}
            ></input>
          </div>
        )}

        <div className="flex justify-center mt-20">
          <button onClick={handleSignUp} className="bg-emerald-400 hover:bg-emerald-300 cursor-pointer py-3 px-20 rounded-full text-slate-800 font-semibold">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
