import "./App.css";
import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import { useState } from "react";
import Name from "./pages/Name";

// const isLogin = () => {
//   if (localStorage.getItem("token")) {
//     return true;
//   } else return false;
// };

// const PrivateRoute = ({component: Component, ...rest}) => {
//   return (
//       <Route {...rest} render={props => (
//           isLogin() ?
//               <Component {...props} />
//           : <Navigate to={"/login"} />
//       )} />
//   );
// };

function App() {
  const [letter, setLetter] = useState();
  const [gender, setGender] = useState();
  const [selectedName, setSelectedName] = useState();
  const [selectedKey, setSelectedKey] = useState();
  const [isNavbarOn, setIsNavbarOn] = useState(false);
  const [namesArray, setNamesArray] = useState([]);
  const [nameToFav, setNameToFav] = useState(new Set());

  console.log(nameToFav, "selected name from app.js");

  return (
    <AppContext.Provider
      value={{
        letter,
        setLetter,
        gender,
        setGender,
        selectedName,
        setSelectedName,
        namesArray,
        setNamesArray,
        selectedKey,
        setSelectedKey,
        setNameToFav,
        nameToFav,
        isNavbarOn,
        setIsNavbarOn,
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/name/:value" element={<Name />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
