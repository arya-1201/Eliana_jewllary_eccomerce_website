import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ring from "./Components/Ring/Ring.jsx";
import Home from "./Components/Home/Home.jsx";

import RingDescription from "./Components/Ringdescription/RingDescription.jsx";
import CardDetails from "./carddetails/CardDetails.jsx";
import ProductDescription from "./ProductDescription/ProductDescription.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/collection/:collectionType" element={<CardDetails />} />
        <Route
          path="/collection/:collectionType/:id"
          element={<ProductDescription />}
        />
        {/* <Route path="/rings/" element={<Ring />} />
        <Route path="/ring/:id" element={<RingDescription/>}/>
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
