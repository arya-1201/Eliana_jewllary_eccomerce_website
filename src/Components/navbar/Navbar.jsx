import React from "react";
import search from "/assets/images/search.png";
import heart from "/assets/images/heart.png";
import shoppingBag from "/assets/images/shopping-bag.png";
import image from "/assets/images/image.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {

  let items = useSelector((state)=>state.cart)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex justify-around items-center mt-5">
        <div className="mt-5">
          <ul>
            <li className="flex gap-8 list-none leading-7 font-moglan">
              <a
                className="no-underline text-[#15534b] font-normal text-xl hover:text-[#000000] hover:underline"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>

              <a
                href="#collection"
                className="no-underline text-[#15534b] font-normal text-xl  hover:text-[#000000] hover:underline"
                onClick={() => scrollToSection("collection")}
              >
                Collection
              </a>
              <a
                href="#blogs"
                className="no-underline text-[#15534b] font-normal text-xl  hover:text-[#000000] hover:underline"
                onClick={() => scrollToSection("blogs")}
              >
                Blogs
              </a>
              <a
                href="#contact"
                className="no-underline text-[#15534b] font-normal text-xl  hover:text-[#000000] hover:underline"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-[#15534b] font-normal text-6xl leading-20 mr-32 font-moglan">
          <h1>Eliana</h1>
        </div>
        <div className="flex gap-10 relative">
          <img src={search} alt="" className="w-8 h-8 hover:scale-125" />
          <img src={heart} alt="" className="w-8 h-8 hover:scale-125" />
          <Link to={"/Cart"}>
          <img src={shoppingBag} alt="" className="w-8 h-8 hover:scale-125 " /><sup className="absolute top-0 left-44" >{items.length}</sup>
          </Link>
          <img
            className="w-8 h-8 rounded-full border-2 border-green-700 hover:scale-125"
            src={image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
