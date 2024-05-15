import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../CartSlice";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.cart.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (itemId) => {
    dispatch(removeFromFavorites(itemId));
  };

  return (
    <div className="w-full h-auto grid grid-cols-3 gap-44 justify-center justify-items-center mt-24 ">
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <div className="w-[300px] h-[300px] bg-[#13524a] rounded-xl shadow-md">
            <div className="w-full h-[200px]">
              <img
                className="object-center w-full h-[200px] rounded-xl"
                src={favorite.image}
                alt={favorite.name}
              />
            </div>

            <div className="w-full h-full">
              <h1 className="text-[16px] font-playfair-display text-white mt-2 ml-2">
                {favorite.name}
              </h1>
              <div className="mt-6 ml-2 flex justify-between items-center">
                <h1 className="text-[16px] font-moglan text-white">
                  INR:{favorite.price}
                </h1>
                <i
                  className="fa-regular fa-heart text-[16px] mr-4 cursor-pointer text-red-500"
                  onClick={() => handleRemoveFromFavorites(favorite.id)}
                ></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
