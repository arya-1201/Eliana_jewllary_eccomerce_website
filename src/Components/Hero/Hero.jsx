import React from "react";
import girl1 from "/assets/images/girl1.png";

const Hero = () => {
  return (
    <>
      <div id="home" class="w-full h-[746px]">
        <img
          id="image1"
          class="absolute w-[500px] h-[650px] left-[calc(50%-550px/2-0.5px)] top-[150px]"
          src={girl1}
          alt=""
        />
        <h1
          id="label1"
          class="absolute text-[80px] font-normal uppercase text-[#15534b] left-[120px] top-[310px] font-moglan"
        >
          Enchanting
        </h1>
        <h1
          id="label11"
          class="absolute text-[80px] font-normal text-[#15534b] left-[872px] top-[310px] font-moglan"
        >
          JEWELLERYS
        </h1>
      </div>
      <div class="absolute w-full h-[45px] bg-[#15534b] top-[800px] left-0 overflow-hidden">
        <h1
          id="scroll-text"
          class="absolute text-[20px] text-white leading-[26.66px] font-normal animate-scroll-text mt-2 font-playfair-display "
        >
          GET 20% DISCOUNT ON YOUR FIRST PRODUCT &nbsp;&nbsp;&nbsp;&nbsp;-
          &nbsp;&nbsp;&nbsp;&nbsp; DISCOVER LATEST COLLECTIONS AND TOP DESIGNERS
          &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; 10% DISCOUNT FOR
          REGISTERED USER
        </h1>
      </div>
    </>
  );
};

export default Hero;
