import React, { useState } from "react";
import product from "../Data";
import { Link } from "react-router-dom";

const Earrings = () => {
  const [filteredData, setFilteredData] = useState(
    product.filter((item) => item.category === "earrings")
  );

  const filterByitem = (item) => {
    if (item === "all") {
      setFilteredData(product.filter((item) => item.category === "earrings"));
    }
  };

  const sortByPrice = (order) => {
    const sortedData = [...filteredData];
    if (order === "asc") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    return sortedData;
  };
  return (
    <>
      <Link to={"/"}>
        <i class="fa-solid fa-arrow-left text-[50px] text-[#13542a] mt-3 ml-3"></i>
      </Link>
      <div className="flex gap-5 ml-12 mt-12 ">
        <button
          onClick={() => filterByitem("all")}
          className="font-playfair-display w-[126px] h-[37px] bg-[#fef5ee] text-[#18544d] text-center rounded-xl border-[1px] border-[#13524a] hover:bg-[#13524a] hover:text-white"
        >
          All Products
        </button>

        <button
          onClick={() => setFilteredData(sortByPrice("asc"))}
          className="font-playfair-display w-[126px] h-[37px] bg-[#fef5ee] text-[#18544d] text-center rounded-xl border-[1px] border-[#13524a] hover:bg-[#13524a] hover:text-white"
        >
          Low to High
        </button>
        <button
          onClick={() => setFilteredData(sortByPrice("desc"))}
          className="font-playfair-display w-[126px] h-[37px] bg-[#fef5ee] text-[#18544d] text-center rounded-xl border-[1px] border-[#13524a] hover:bg-[#13524a] hover:text-white"
        >
          High to Low
        </button>
      </div>

      <div className="w-full h-auto grid grid-cols-3 gap-44 justify-center justify-items-center mt-24 ">
        {filteredData.map((Earrings, index) => (
          <div key={index}>
            <div className="w-[300px] h-[300px] bg-[#13524a] rounded-xl shadow-md">
              <div className="w-full h-[200px]">
                <img
                  className="object-center w-full h-[200px] rounded-xl"
                  src={Earrings.image}
                  alt={Earrings.name}
                />
              </div>
              <div className="w-full h-full">
                <h1 className="text-[16px] font-playfair-display text-white mt-2 ml-2">
                  {Earrings.name}
                </h1>
                <div className="mt-6 ml-2 flex justify-between items-center">
                  <h1 className="text-[16px] font-moglan text-white">
                    INR:{Earrings.price}.00
                  </h1>
                  <i className="fa-solid fa-bag-shopping text-white text-[16px] mr-4"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Earrings;
