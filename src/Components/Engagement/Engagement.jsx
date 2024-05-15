import React from "react";
import prpose from "/assets/images/prpose.png";
import propose1 from "/assets/images/propose1.png";
import platinumRing from "/assets/images/platinum ring 1.png";
import { Link } from "react-router-dom";

const Engagement = () => {
  return (
    <div className="w-full pt-[259px] pl-[92px]">
      <div className="w-[628px] h-[459px] relative">
        <img className="rounded-sm" src={prpose}></img>
        <img
          className="absolute -top-20 -ml-10 rounded-sm"
          src={propose1}
        ></img>
        <img
          className="absolute top-[305px] -left-[100px]"
          src={platinumRing}
        ></img>
        <div className=" absolute w-[700px] h-[400px]  top-12 left-[628px]">
          <h1 className="font-moglan ml-20 text-[#13524a] text-[15px]">
            For Someone Special
          </h1>
          <h2 className="font-moglan ml-20 text-black text-[40px]">
            Ready To Wear Engagement Ring ?
          </h2>
          <p className="ml-20 mt-10 font-playfair-display text-black text-[15px]">
            Discover elegance and sophistication with our exquisite collection
            of ready-to-wear <br />
            engagement rings. Crafted with precision and passion, each piece in
            our collection <br />
            embodies timeless beauty and exceptional craftsmanship
          </p>
          <Link to={`/collection/couplering`}>
          <button className="h-[54px] w-[187px] text-[22px] ml-20 mt-14 font-moglan bg-[#fef5ee] border-[1px] border-[#13524a] rounded-md text-[#13524a] hover:bg-[#13524a] hover:text-white ">
            Shop Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
