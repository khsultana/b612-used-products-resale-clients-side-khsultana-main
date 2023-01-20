import React from "react";
import {
  FaAutoprefixer,
  FaCalendar,
  FaCar,
  FaCheck,
  FaHeadphones,
  FaLocationArrow,
} from "react-icons/fa";
const Advantage = () => {
  return (
    <div className="w-full mt-10">
      <h2 className="text-5xl text-red-600 font-semibold text-center border- border-red-600 underline my-10">
        Advantage
      </h2>
      <div className="lg:flex justify-center items-center ">
        <div className="w-3/4 ml-10 ">
          <h1 className="text-5xl font-semibold">
            Car Dealers
            <span className="text-5xl text-red-600 font-bold ">
              {" "}
              Advantages
            </span>
          </h1>
        </div>
        <div className="w-1/2  ">
          <h2 className="text-lg p-6  ">
            We know the difference is in the details and that’s why our car
            rental services, in the tourism and business industry, stand out for
            their quality and good taste.
          </h2>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-5 mt-10 ">
        {/* 1 */}

        <div className="rounded-xl text-center card w-96 h-72  shadow-2xl text-white bg-red-600 border-4 border-white ">
          <div className="card-body">
            <center>
              {" "}
              <FaHeadphones size={70} />
            </center>
            <h2 className="text-2xl font-semibold   hover:text-white">
              24/7 Customer Online <br /> Support
            </h2>
            <h2>Call us Anywhere Anytime</h2>
          </div>
        </div>

        <div className="rounded-xl text-center card w-96 h-72 shadow-2xl hover:text-white hover:bg-red-600 border-2 border-red-600">
          <div className="card-body">
            <center>
              {" "}
              <FaCalendar className="hover:text-white text-red-600" size={70} />
            </center>
            <h2 className="text-2xl font-semibold   hover:text-white">
              Reservation Any Time <br /> You Wants
            </h2>
            <h2>24/7 Customer Online Reservation</h2>
          </div>
        </div>
        <div className="border-2 border-red-600 rounded-xl text-center card w-96 h-72  shadow-2xl hover:text-white hover:bg-red-600">
          <div className="card-body">
            <center>
              {" "}
              <FaLocationArrow
                className="hover:text-white text-red-600"
                size={70}
              />
            </center>
            <h2 className="text-2xl font-semibold  hover:text-white">
              Numbers Of Picking <br /> Location
            </h2>
            <h2>250+ locations</h2>
          </div>
        </div>
        <div className="border-2 border-red-600 rounded-xl text-center card w-96 h-72  shadow-2xl hover:text-white hover:bg-red-600">
          <div className="card-body">
            <center>
              {" "}
              <FaAutoprefixer
                className="hover:text-white text-red-600"
                size={70}
              />
            </center>
            <h2 className="text-2xl font-semibold   hover:text-white">
              All Type & Brand Cars <br /> Manufacturer
            </h2>
            <h2>Manufacturers good</h2>
          </div>
        </div>
        <div className="border-2 border-red-600 rounded-xl text-center card w-96 h-72  shadow-2xl hover:text-white hover:bg-red-600">
          <div className="card-body">
            <center>
              {" "}
              <FaCheck className="hover:text-white text-red-600" size={70} />
            </center>
            <h2 className="text-2xl font-semibold   hover:text-white">
              The Most Cheapest <br /> Rent Car
            </h2>
            <h2>Cheapest</h2>
          </div>
        </div>
        <div className="border-2 border-red-600 rounded-xl  text-center card w-96 h-72  shadow-2xl hover:text-white hover:bg-red-600">
          <div className="card-body">
            <center>
              {" "}
              <FaCar className="hover:text-white text-red-600 " size={70} />
            </center>
            <h2 className="text-2xl font-semibold   hover:text-white">
              10+ Years Experienced <br /> Drivers
            </h2>
            <h2>Experienced Drivers</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
