import React, { useState } from "react";
import ring from "/assets/images/footer-ring.png";
import instagram from "/assets/images/icons8-instagram-100 1.png";
import facebook from "/assets/images/icons8-facebook-100 1.png";
import twitter from "/assets/images/icons8-twitter-100 1.png";
import youtube from "/assets/images/icons8-youtube-100 1.png";
import visa from "/assets/images/visa.png";
import mastercard from "/assets/images/mastercard.png";
import amex from "/assets/images/amex.png";
import discover from "/assets/images/discover.png";
import amazon from "/assets/images/amazon.png";


const Footer = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const emailInput = event.target.elements.email.value;
    // Perform email validation here
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput);
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="w-full mt-96">
      <div className="w-full relative">
        <div className="h-[319px] w-full bg-[#f3ece6]">
          <h1 className="font-playfair-display text-[16px] leading-[21px] text-[#13524a] text-center pt-[50px]">
            NEWSLETTER
          </h1>
          <h1 className="font-playfair-display text-[47px] leading-[63px] text-[#000000] text-center">
            Subscribe To Get <br />
            The Latest Updates
          </h1>
          <form onSubmit={handleSubscribe}>
            <div className="w-full flex justify-center items-center mt-[20px] gap-[10px]">
              <input
                className="w-[394px] h-[44px] rounded-[3px] border border-[#13524a] bg-white pl-[10px]"
                type="email"
                name="email"
                id="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                className="w-[126px] h-[44px] bg-[#f3ece6] border border-[#13524a] rounded-[3px] font-playfair-display text-[17px] leading-[23px] text-[#13524a] hover:bg-[#13524a] hover:text-white"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
          {showMessage && (
            <p className="text-center text-green-600 mt-4">
              Thank you for subscribing!
            </p>
          )}
        </div>
        <div className="w-full h-[391px] bg-[#13524a]">
          <div className="absolute w-[292px] h-[194px] left-[69px] top-[380px] bg-[#13524a] border border-white">
            <img
              className="absolute w-[62.92px] h-[44.76px] left-[260px] top-[-25px]"
              src={ring}
              alt=""
            />
            <h1 className="font-myFirstFont text-[90px] leading-[128px] text-white text-center">
              Eliana
            </h1>
            <h2 className="absolute w-[170px] h-[60px] left-[60px] top-[90px] text-[40px] leading-[60px] text-white">
              Jewellery
            </h2>
          </div>
          <h1 className="absolute w-[348px] h-[61px] left-[400px] top-[390px] font-playFair text-[40px] leading-[61px] text-white">
            Eliana Jewellerys
          </h1>
          <h1 className="absolute w-[239px] h-[27px] left-[400px] top-[455px] font-playFair text-[18px] leading-[27px] text-white">
            Crafted with love & loyalty
          </h1>
          <div className="absolute w-[197px] h-[30px] left-[400px] top-[500px] flex gap-[30px]">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
          </div>
          <div className="absolute w-[116px] h-[234px] left-[880px] top-[380px]">
            <h1 className="text-[26px] leading-[40px] text-white">Navigate</h1>
            <ul className="mt-[5px] ml-[15px] text-white flex flex-col gap-[20px] text-[18px] list-disc">
               <li>Home</li>
              <li>Collection</li>
              <li>Blogs</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
          </div>
          <div className="absolute w-[170px] h-[156px] left-[1058px] top-[380px]">
            <h1 className="text-[26px] leading-[40px] text-white">Need Help ?</h1>
            <ul className="mt-[5px] ml-[15px] text-white flex flex-col gap-[20px] text-[18px] list-disc">
              <li>Store Location</li>
              <li>Pricing</li>
              <li>Regarding Stock</li>
            </ul>
          </div>
          <div className="absolute w-[168px] h-[156px] left-[1276px] top-[380px]">
            <h1 className="text-[26px] leading-[40px] text-white">Policy</h1>
            <ul className="mt-[5px] ml-[15px] text-white flex flex-col gap-[20px] text-[18px] list-disc">
              <li>Term Of Service</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="absolute w-[368px] h-[27px] left-[69px] top-[680px] flex items-center justify-center gap-[10px]">
            <i className="fa-solid fa-copyright  text-white text-[18px]"></i>
            <h1 className="font-myFirstFont text-[18px] leading-[27px] text-white">
              2024 All Rights Reserved Terms Of Use
            </h1>
          </div>
          <h1 className="absolute w-[256px] h-[27px] left-[1120px] top-[640px] font-playFair text-[18px] leading-[27px] text-white">
            Supported Payment Systems
          </h1>
          <div className="absolute w-[256px] h-[40px] left-[1120px] top-[670px] flex gap-[10px]">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={amex} alt="" />
            <img src={discover} alt="" />
            <img src={amazon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
