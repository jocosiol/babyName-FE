import "./App.css";
import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  return (
    <AppContext.Provider value={{}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
