import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="font-serif lg:text-6xl lg:font-bold text-white text-2xl font-bold mt-3 my-4">
          How to <br /> Safely Buy a <br /> Used Car
        </h1>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
        <h2 className="font-serif lg:text-xl text-white mt-4 ">
          Find your next car with us <br />
          Leading online automotive <br />
          marketplace in Bangladesh
        </h2>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="rounded-none font-serif border-none btn bg-gradient-to-r from-red-600  to-blue-500 hover:from-pink-500 hover:to-yellow-500">
          Find Out More
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <h2 href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </h2>
        <h2 href={`#slide${next}`} className="btn btn-circle">
          ❯
        </h2>
      </div>
    </div>
  );
};

export default BannerItem;
