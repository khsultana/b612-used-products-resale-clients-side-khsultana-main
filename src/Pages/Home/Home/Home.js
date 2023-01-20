import React from "react";
import About from "../About/About";
import Advantage from "../Advantage/Advantage";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Product></Product>
      <Advantage></Advantage>
      <About></About>
    </div>
  );
};

export default Home;
