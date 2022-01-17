import "./App.css";
import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <AppContext.Provider value={{}}>
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
