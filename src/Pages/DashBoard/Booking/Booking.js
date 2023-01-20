import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { FaList } from "react-icons/fa";
import { AuthContext } from "../../../Context/Auth Provider/AuthPovider";

const Booking = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://b612-used-products-resale-server-side-khsultana-khsultana.vercel.app/bookings?email=${user?.email}`,

        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-6 flex items-center gap-4 text-red-600">
        {" "}
        <FaList /> Booking Item Here
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full mt-6">
          <thead>
            <tr>
              <th></th>
              <th>Car Name</th>
              <th> Phone Number</th>
              <th>Resale Price</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id} className="hover">
                <th>{i + 1}</th>
                <td>{booking.CarName}</td>
                <td>{booking.PhoneNumber}</td>
                <td>{booking.ResalePrice}</td>
                <td>{booking.Address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
