import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const { name, productOne } = useLoaderData();
  const [booking, setBooking] = useState(null);
  // useEffect(() => {
  //   fetch("https://server-wine-xi.vercel.app/product/")
  //     .then((res) => res.json())
  //     .then((data) => setCategory(data));
  // });

  return (
    <div className="lg:grid lg:grid-cols-1  gap-5 mt-5">
      <h3 className=" flex gap-3 items-center justify-center text-4xl text-red-600 font-bold">
        <FaCar></FaCar>
        {name}
      </h3>
      {productOne.map((product) => (
        <CategoriesCard
          key={product.booking_id}
          product={product}
          setBooking={setBooking}
        ></CategoriesCard>
      ))}
      {booking && (
        <BookingModal booking={booking} setBooking={setBooking}
        ></BookingModal>
      )}{" "}
    </div>
  );
};

export default Categories;
