import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../Hero/Hero";
import Collection from "../collection/Collection";
import Trending from "../TrendingPieces/Trending";
import Engagement from "../Engagement/Engagement";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Hero />
      <Collection />
      <Trending />
      <Engagement />
      <Blogs />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
