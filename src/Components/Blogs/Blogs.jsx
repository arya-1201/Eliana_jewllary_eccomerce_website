import React from "react";
import blogs1 from "/assets/images/blogs1.png";
import blogs2 from "/assets/images/blogs2.png";
import blogs3 from "/assets/images/blogs3.png";
import blogs4 from "/assets/images/blogs4.png";
import blogs5 from "/assets/images/blogs5.png";
import image from "/assets/images/image.png";

const Blogs = () => {
  return (
    <div id="blogs" className="w-full  mt-44 ">
      <h1 className="font-moglan text-[#13524A] text-[20px] text-center">
        Read Our Blogs & News
      </h1>
      <h1 className="font-moglan text-black text-[50px] text-center">
        We're Making News
      </h1>
      <div className="w-full h-[500px]  flex justify-around items-center mt-20">
        <div className="w-[364px] h-[330px] bg-[#fef5ee] border-[1px] border-[#13524A] rounded-[9px] hover:scale-125 ">
          <img src={blogs1}></img>
          <h1 className="ml-6 font-playfair-display text-[20x] text-black ">
            Vijay Gems had made deal for <br /> changing name
          </h1>
          <h2 className="ml-6 mt-2 font-playfair-display text-[12x]  text-black">
            What would be next some expert are....
          </h2>
          <div className="w-full ">
            <div className=" ml-6 mt-3 flex gap-2">
              <img className="w-9 h-9 rounded-full" src={blogs4}></img>
              <div className="flex-col">
                <h1 className="text-black text-[15px] font-moglan">
                  Margari john
                </h1>
                <h2 className="black text-[9px] font-moglan">Designer</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[364px] h-[330px] bg-[#fef5ee] border-[1px] border-[#13524A] rounded-[9px]  hover:scale-125">
          <img src={blogs2}></img>
          <h1 className="ml-6 font-playfair-display text-[20x] text-black ">
            Prepare yourself for some <br /> undivided attention.
          </h1>
          <h2 className="ml-6 mt-2 font-playfair-display text-[12x]  text-black">
            Amazing new collection by eliana and....
          </h2>
          <div className="w-full ">
            <div className=" ml-6 mt-3 flex gap-2">
              <img className="w-9 h-9 rounded-full" src={image}></img>
              <div className="flex-col">
                <h1 className="text-[#13524A] text-[15px] font-moglan">
                  Arya Stark
                </h1>
                <h2 className="black text-[9px] font-moglan">news& blogs</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[364px] h-[330px] bg-[#fef5ee] border-[1px] border-[#13524A] rounded-[9px]  hover:scale-125">
          <img src={blogs3}></img>
          <h1 className="ml-6 font-playfair-display text-[20x] text-black ">
            For the first time in india take <br /> home a diamond
          </h1>
          <h2 className="ml-6 mt-2 font-playfair-display text-[12x]  text-black">
            The offer of eliana store is unbelievable.....
          </h2>
          <div className="w-full ">
            <div className=" ml-6 mt-3 flex gap-2">
              <img className="w-9 h-9 rounded-full" src={blogs5}></img>
              <div className="flex-col">
                <h1 className="text-black text-[15px] font-moglan">
                  Mira Alber
                </h1>
                <h2 className="black text-[9px] font-moglan">Crafter</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
