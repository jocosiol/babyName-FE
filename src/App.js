import "./App.css";
import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import { useState } from "react";
import Name from "./pages/Name";

function App() {
  const [letter, setLetter] = useState();
  const [gender, setGender] = useState();
  const [selectedName, setSelectedName] = useState();
  const [selectedKey, setSelectedKey] = useState();

  const [namesArray, setNamesArray] = useState([]);
  const [nameToFav, setNameToFav] = useState([]);
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
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/name/:value" element={<Name />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
