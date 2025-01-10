import React from "react";
import BackgroundVideo from "./Video/BackgroundVideo";
import ProductList from "./Products/ProductList";
import Texto from "./Texto/Texto";

const Home = () => {
  return (
    <div>
      <BackgroundVideo />;
      <ProductList />
      <Texto />
    </div>
  );
};

export default Home;
