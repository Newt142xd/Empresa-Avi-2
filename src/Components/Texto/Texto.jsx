import React from "react";
import "./Texto.css";

const Texto = () => {
  return (
    <div className="video-texto-container">
      <div className="texto">
        <h1>Tienda virtual AVI</h1>
        <p>
          En AVI Tienda Virtual para el hogar es un espacio digital donde
          encuentras productos de hogar con la mejor calidad. Nos especializamos
          en ofrecer una selección de productos para el hogar de diferentes
          estilos y marcas, para que puedas crear estilos maravillosos y
          espectaculares desde la comodidad de tu hogar.
        </p>
      </div>
      <div className="video">
        <video
          src="/src/video-Circular.mp4"
          autoPlay
          loop
          muted
          className="video-circular"
        />
      </div>
    </div>
  );
};

export default Texto;
