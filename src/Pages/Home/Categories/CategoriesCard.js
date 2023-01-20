import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CategoriesCard = ({ product, setBooking }) => {
  const {
    name,
    picture,
    originalPrice,
    company,
    postedTime,
    sellerName,
    sellerVerify,
    resalePrice,
    sellerNumber,
    condition,
    useYear
  } = product;
  return (
    <div className="">
      <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-4 mt-6 ">
        <div>
          <img className="w-full" src={picture} alt="Movie" />
        </div>
        <div className="card-body">

          <h2 className="card-title font-bold text-3xl text-red-600">{name}</h2>
          <h2><span className="font-bold text-xl">Seller Name:  {sellerName}</span> </h2>
          <h2> <span className="font-semibold">Original Price : $</span>{originalPrice} </h2>
          <h2><span className="font-semibold">Company:</span> {company} </h2>
          <h2>Post Time : {postedTime} </h2>
          <h2 className="flex items-center gap-2">Seller Verified: <span className="text-blue-600"><FaCheckCircle /></span> {sellerVerify} </h2>
          <h2><span className="font-semibold">ResalePrice: </span>  {resalePrice} </h2>
          <h2> <span className="font-bold"> Seller Number:</span>  {sellerNumber} </h2>
          <span className="font-semibold">Condition :- {condition}</span>
          <span className="font-semibold">Used Year: {useYear}</span>
          <div className="card-actions justify-end">
            <label
              onClick={() => setBooking(product)}
              htmlFor="carBookingModal"
              className="btn btn-error border-none rounded-none bg-gradient-to-r from-green-400 to-blue-500"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
