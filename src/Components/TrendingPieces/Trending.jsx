import React from "react";
import { Link } from "react-router-dom";

const trendingItems = [
  { src: "/assets/images/wedding ring 1.png", title: "Wedding Rings", category: "WeddingRing" },
  { src: "/assets/images/couple ring.png", title: "Couple Ring", category: "couplering" },
  { src: "/assets/images/shine like a night.png", title: "Shine Like A Night", category: "WeddingRing" },
  { src: "/assets/images/Rose Gold Radiance.png", title: "Rose Gold Radiance", category: "rosegold" },
  { src: "/assets/images/Golden Glow.png", title: "Golden Glow", category: "WeddingRing" },
  { src: "/assets/images/Whisper Winter.png", title: "Whisper Winter", category: "WeddingRing" },
];

const Trending = () => {
  return (
    <>
    <div className="w-full mt-32">
      <h2 className="text-center mt-22 font-normal text-[40px] text-[rgba(19,82,74,0.38)] font-moglan ">
        What you Loved The Most
      </h2>
      <h1 className="text-center font-normal text-[80px] leading-[107px] text-[#13524a] font-moglan">
        Trending Pieces
      </h1>
      <div className="w-full h-[600px] grid grid-cols-3  items-center justify-items-center gap-8">
        {trendingItems.map((item, index) => (
          <Link to={`/collection/${item.category}`} key={index} className="w-[426px] h-[160px] rounded-[7px] relative">
            <img src={item.src} alt={item.title} />
            <div className="bg-[rgba(19,82,74,0.38)] rounded-[7px] absolute top-0 w-full h-full">
              <h1 className="font-normal text-[30px] text-white text-center mt-14 font-playfair-display ">
                {item.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Trending;
