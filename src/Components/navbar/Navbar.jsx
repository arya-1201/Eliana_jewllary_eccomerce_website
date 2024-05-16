import React, { useContext, useEffect, useState } from "react";
import search from "/assets/images/search.png";
import heart from "/assets/images/heart.png";
import shoppingBag from "/assets/images/shopping-bag.png";
import userLogo from "/assets/images/userLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/config";
import { addUser, getUserData } from "../../firebase/services";
import { UserProfileContext } from "../../contexts/userContext";

const Navbar = () => {
  const navigate = useNavigate();
  let items = useSelector((state) => state.cart.items);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();
  const { userProfile, setUserProfile } = useContext(UserProfileContext);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const { user } = result;
        if (user.email) {
          const response = await getUserData(user.email);
          localStorage.setItem("userProfile", JSON.stringify(response));
          if (!response) {
            const res = await addUser({ ...user?.providerData[0] });
            localStorage.setItem("userProfile", JSON.stringify(res));
          }
          window.location.reload();
        }
      })
      .catch(() => {});
  };

  const handleLogOut = () => {
    const confirmed = window.confirm("Are you sure you want to Log out?");
    if (confirmed) {
      console.log("logout......");
      localStorage.removeItem("userProfile");
      window.location.reload();
    } else {
      console.log("Logout cancelled.");
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
                onClick={() => {
                  scrollToSection("home");
                  navigate("home");
                }}
              >
                Home
              </a>
              {location.pathname === "/home" && (
                <>
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
                </>
              )}
            </li>
          </ul>
        </div>
        <div className="text-[#15534b] font-normal text-6xl leading-20 mr-32 font-moglan">
          <h1>Eliana</h1>
        </div>
        <div className="flex gap-10 relative">
          <img src={search} alt="" className="w-8 h-8 hover:scale-125" />
          <Link to={"/favorites"}>
            <img src={heart} alt="" className="w-8 h-8 hover:scale-125" />
          </Link>
          <Link to={"/Cart"}>
            <img
              src={shoppingBag}
              alt=""
              className="w-8 h-8 hover:scale-125 "
            />
            <sup className="absolute top-0 left-44">{items.length}</sup>
          </Link>
          <img
            className="w-8 h-8 rounded-full border-2 border-green-700 hover:scale-125 cursor-pointer"
            src={userProfile?.photoURL || userLogo}
            alt="User"
            onClick={toggleProfile}
          />
        </div>
      </div>
      {showProfile && (
        <div className="fixed top-0 right-0 h-full w-64 bg-[#fef5ee] shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold">My Profile</div>
            <button
              onClick={toggleProfile}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="text-lg font-semibold mb-4">
            {userProfile?.displayName || "......"}
          </div>
          {/* <div className="text-lg font-semibold mb-4"> */}
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          {/* </div> */}
          <div className="text-sm text-gray-600 mb-4">
            {userProfile?.email || "......@gmail.com"}
          </div>
          <div className="border-t border-gray-200 w-full mb-4"></div>
          <div className="flex flex-col">
            <Link to="/Cart" className="text-blue-500 hover:underline mb-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 2a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1H4z"
                    clipRule="evenodd"
                  />
                </svg>
                My Orders
              </div>
            </Link>
            <Link to="/settings" className="text-blue-500 hover:underline mb-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://w ww.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 1v10h12V5H4z"
                    clipRule="evenodd"
                  />
                </svg>
                Account Settings
              </div>
            </Link>
            <button className="text-red-500 hover:underline focus:outline-none">
              <div className="flex items-center" onClick={handleLogOut}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 5.293a1 1 0 011.414 0L10 6.586l1.879-1.88a1 1 0 111.414 1.415L11.414 8l1.88 1.879a1 1 0 11-1.415 1.415L10 9.414l-1.879 1.88a1 1 0 01-1.414-1.415L8.586 8 6.707 6.121a1 1 0 010-1.414zM10 2a8 8 0 100 16 8 8 0 000-16z"
                    clipRule="evenodd"
                  />
                </svg>
                Logout
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
