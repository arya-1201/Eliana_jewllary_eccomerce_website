  import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ring from "./Components/Ring/Ring.jsx";
import Home from "./Components/Home/Home.jsx";
import Earrings from "./Components/Earrings/Earrings.jsx";
import RingDescription from "./Components/Ringdescription/RingDescription.jsx";


function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rings" element={<Ring />} />
        <Route path="/ring/:id" element={<RingDescription/>}/>
        <Route path="earrings" element={<Earrings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
