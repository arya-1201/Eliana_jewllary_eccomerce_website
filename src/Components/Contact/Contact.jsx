import React from "react";
import arrow from "/assets/images/follow-arrow.png";
import instagram1 from "/assets/images/instagram1.png";
import instagram2 from "/assets/images/instagram2.png";
import instagram3 from "/assets/images/instagram3.png";
import instagram4 from "/assets/images/instagram4.png";
import instagram5 from "/assets/images/instagram5.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex">
      <div className="w-[830px] relative">
        <h1 className="text-[33px] font-moglan text-[#13524a] mt-[186px] ml-[103px]">
          INSTAGRAM
        </h1>
        <h1 className="text-[102px] font-moglan text-black ml-[98px] mt-[30px] ">
          Follow Us
        </h1>
        <h1 className="text-[102px] font-moglan text-[#13524a] ml-[87px]">
          @Elianajewellery
        </h1>
        <p className="text-[25px] font-normal text-black ml-[98px] font-playfair-display mt-[50px]">
          If you like daily updates why don't <br />
          you <span className="text-[#13524a]">follow</span> us
          <span className="text-[#13524a] p-2">on instagram ?</span>
        </p>
       <div className="relative">
         <img className=" absolute left-[290px] -top-8" src={arrow}></img>
         <button className="absolute top-16 left-28 w-[144px] h-[54px] bg-[#fef5ee] rounded-md border-black border-[1px] text-[#13524a] hover:bg-[#13524a] hover:text-white">FOLLOW</button>
       </div>
      </div>
      <div className="w-[800px]  relative">
         <img className=" absolute top-[186px] left-[100px]" src={instagram1}></img>
         <img className="absolute top-[690px] left-[60px]" src={instagram2}></img>
         <img className="absolute top-[755px] left-[205px]" src={instagram3}></img>
         <img className="absolute top-[510px] left-[10px]" src={instagram4}></img>
         <img className="absolute top-[642px] left-[450px]" src={instagram5}></img>
         <img></img>
      </div>
    </div>
  );
};

export default Contact;
