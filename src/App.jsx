import { useState } from "react";
import "./App.css";
import Menu from "./Components/Menu";
import BackgroundVideo from "./Components/Video/BackgroundVideo";
import ProductList from "./Components/Products/ProductList";

function App() {
  return (
    <div>
      <Menu />
      <BackgroundVideo />
      <ProductList />
    </div>
  );
}

export default App;
