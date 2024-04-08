import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Collection from "./Components/collection/Collection.jsx";
import Trending from "./Components/TrendingPieces/Trending.jsx";
import Engagement from "./Components/Engagement/Engagement.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <Trending />
      <Engagement />
      <Blogs />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
