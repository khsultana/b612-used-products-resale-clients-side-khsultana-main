import React from "react";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 p-20 rounded-xl mt-10 my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2">
            <img
              alt=""
              src="https://carzone.dexignlab.com/xhtml/images/car.png"
              className="w-full  "
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-red-600">ABOUT US</h1>
            <h2 className="py-6 text-lg">
              Everything you need to build an amazing dealership website.
              <br /> <br />
              CarZone BD sells all kind of Reconditioned and Used Cars in
              Bangladesh. We Take The Guarantee Of Car Papers.Our Dealership is
              founded on trust, integrity, and respect. We are proud to offer
              these values in our sales and business practices , so our
              customers keep coming back. The vehicles on our lot have the best
              prices and quality in the area so come by and see us today!
            </h2>
            <button className="btn btn-error border-none rounded-none bg-gradient-to-r from-green-400 to-blue-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
