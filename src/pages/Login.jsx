import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col justify-center font-Montserrat">
      <div className="flex grow flex-col items-center justify-center mb-20">
        <img src="https://res.cloudinary.com/imgpetapp/image/upload/c_scale,w_148/v1642320920/babyName_logo.png" />
        <div className="text-teal-600 text-3xl font-bold">Baby Name</div>
      </div>
      <LoginForm />
      <div className="flex flex-col mt-20 mb-5 items-center">
        <div className="opacity-50 text-base">Don't have an account?</div>
        <div className="text-lg font-semibold cursor-pointer hover:underline" >
          Create an account
        </div>
      </div>
    </div>
  );
}

export default Login;
