import "./App.css";
import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import { useState } from "react";

function App() {
  const [letter, setLetter] = useState();
  const [gender, setGender] = useState();
  return (
    <AppContext.Provider value={{ letter, setLetter, gender, setGender }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
