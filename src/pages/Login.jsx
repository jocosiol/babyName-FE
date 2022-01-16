import React from "react";

function Login() {
  return (
    <div className="min-h-screen bg-yellow-200 py-6 flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <img src="https://res.cloudinary.com/imgpetapp/image/upload/c_scale,w_148/v1642320920/babyName_logo.png" />
        <div className="text-teal-600 text-3xl font-bold font-Montserrat">
          Baby Name
        </div>
      </div>
      <form>
          <div>
              <lable>Email</lable>
              <input type="text"></input>
          </div>
      </form>
    </div>
  );
}

export default Login;
