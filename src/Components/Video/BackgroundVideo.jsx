import React from "react";
import "./BackgroundVideo.css";
import video from "../Video/Video.mp4";

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="content">
        <h1>Bienvenido a AVI</h1>
        <p>Encontraras una variedad de productos de todo tipo.</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
