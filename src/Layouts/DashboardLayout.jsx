import React from "react";
import Navbar from "../Components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
