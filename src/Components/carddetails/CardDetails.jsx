import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import product from "../Data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../CartSlice";

const CardDetails = () => {
  const { collectionType } = useParams();
  const [filteredProduct, setFilteredProduct] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favorites);

  useEffect(() => {
    const filteredProduct = product.filter(
      (item) => item.category === collectionType
    );
    setFilteredProduct(filteredProduct);
  }, [collectionType]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterByGender = (gender) => {
    if (gender === "all") {
      setFilteredProduct(
        product.filter((item) => item.category === collectionType)
      );
    } else {
      const filtered = product.filter(
        (item) => item.category === collectionType && item.gender === gender
      );
      setFilteredProduct(filtered);
    }
  };

  const sortByPrice = (order) => {
    const sortedData = [...filteredProduct];
    if (order === "asc") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    return sortedData;
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleAddToFavorites = (itemId) => {
    const itemToAdd = filteredProduct.find((item) => item.id === itemId);
    if (itemToAdd) {
      dispatch(addToFavorites(itemToAdd));
    }
  };

  const isFavorite = (itemId) => {
    return favorites.some((item) => item.id === itemId);
  };

  const handleRemoveFromFavorites = (itemId) => {
    dispatch(removeFromFavorites(itemId));
  };

  return (
    <>
      <i
        onClick={handleBack}
        className="fa-solid fa-arrow-left text-[50px] text-[#13542a] mt-3 ml-3 cursor-pointer"
      ></i>

      <div className="flex gap-5 ml-12 mt-12 ">
        <button
          onClick={() => filterByGender("all")}
          className="font-playfair-display w-[126px] h-[37px] bg-[#fef5ee] text-[#18544d] text-center rounded-xl border-[1px] border-[#13524a] hover:bg-[#13524a] hover:text-white"
        >
          All Products
        </button>
        {collectionType === `Rings` && (
          <>
            <button
              onClick={() => filterByGender("Men")}
              className="font-playfair-display w-[126px] h-[37px] bg-[#fef5ee] text-[#18544d] text-center rounded-xl border-[1px] border-[#13524a] hover:bg-[#13524a] hover:text-white"
            >
              Men
            </button>
            <button
              onClick={() => filterByGender("Women")}
              className="font-playfair-display w-[126px] h-[37px] bg-[#fef5ee] text-[#18544d] text-center rounded-xl border-[1px] border-[#13524a] hover:bg-[#13524a] hover:text-white"
            >
              Women
            </button>
          </>
        )}

        <button
          onClick={() => setFilteredProduct(sortByPrice("asc"))}
          className="font-playfair-display w-[126px] h-[37px] bg-[#fef5ee] text-[#18544d] text-center rounded-xl border-[1px] border-[#13524a] hover:bg-[#13524a] hover:text-white"
        >
          Low to High
        </button>
        <button
          onClick={() => setFilteredProduct(sortByPrice("desc"))}
          className="font-playfair-display w-[126px] h-[37px] bg-[#fef5ee] text-[#18544d] text-center rounded-xl border-[1px] border-[#13524a] hover:bg-[#13524a] hover:text-white"
        >
          High to Low
        </button>
      </div>

      <div className="w-full h-auto grid grid-cols-3 gap-44 justify-center justify-items-center mt-24 ">
        {filteredProduct.map((ring, index) => (
          <div key={index}>
            <div className="w-[300px] h-[300px] bg-[#13524a] rounded-xl shadow-md">
              <Link to={`${ring.id}`}>
                <div className="w-full h-[200px]">
                  <img
                    className="object-center w-full h-[200px] rounded-xl"
                    src={ring.image}
                    alt={ring.name}
                  />
                </div>
              </Link>
              <div className="w-full h-full">
                <h1 className="text-[16px] font-playfair-display text-white mt-2 ml-2">
                  {ring.name}
                </h1>
                <div className="mt-6 ml-2 flex justify-between items-center">
                  <h1 className="text-[16px] font-moglan text-white">
                    INR:{ring.price}.00
                  </h1>
                  <i
                    className="fa-regular fa-heart text-[16px] mr-4 cursor-pointer"
                    style={{ color: isFavorite(ring.id) ? "red" : "white" }}
                    onClick={() =>
                      isFavorite(ring.id)
                        ? handleRemoveFromFavorites(ring.id)
                        : handleAddToFavorites(ring.id)
                    }
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardDetails;
