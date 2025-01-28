import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import Purple from "./Purple";

function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/purple" element={<Purple />} />
      </Routes>
    </div>
  );
}

export default MainContainer;
