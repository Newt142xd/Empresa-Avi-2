import React from "react";
import "./ProductCard.css"; // Archivo CSS para los estilos de la tarjeta

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn">Comprar ahora</button>
      </div>
    </div>
  );
};

export default ProductCard;
