import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import ProductDescription from "./ProductDescription/ProductDescription.jsx";
import CardDetails from "./Components/carddetails/CardDetails.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import { Provider } from "react-redux";
import store from "./Components/Store.js";
import FavoritesList from "./Components/FavoritesList/FavoritesList.jsx";
import DashboardLayout from "./Layouts/DashboardLayout.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="/home" element={<Home />} />

            <Route
              path="/collection/:collectionType"
              element={<CardDetails />}
            />
            <Route
              path="/collection/:collectionType/:id"
              element={<ProductDescription />}
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/favorites" element={<FavoritesList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
