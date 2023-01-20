import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/Auth Provider/AuthPovider";

const BookingModal = ({ booking, setBooking }) => {
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const userName = form.userName.value;
    const price = form.price.value;
    const address = form.address.value;

    const bookingDate = {
      CarName: name,
      email: email,
      PhoneNumber: phone,
      UserName: userName,
      ResalePrice: price,
      Address: address,
    };

    fetch(
      "https://b612-used-products-resale-server-side-khsultana-khsultana.vercel.app/bookings",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingDate),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setBooking(null);
          toast.success("Booking Conform SuccessFully");
        }
        console.log(data);
      });
    console.log(bookingDate);
  };

  const { name, resalePrice } = booking;
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="carBookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="carBookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="userName"
              value={user?.displayName}
              className="input input-bordered input-error w-full mt-4 "
              disabled
            />

            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered input-error w-full mt-4"
              disabled
            />
            <input
              type="text"
              name="name"
              value={name}
              className="input input-bordered input-error w-full mt-4 "
              disabled
            />

            <input
              name="price"
              type="text"
              value={resalePrice}
              className="input input-bordered input-error w-full mt-4"
              disabled
            />

            <input
              type="number"
              name="phone"
              placeholder="Enter Your Phone Number Here"
              className="input input-bordered input-error w-full mt-4"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Meeting Location"
              className="input input-bordered input-lg w-full mt-4"
            />

            <br />
            <input className="btn mt-5 w-full" type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
