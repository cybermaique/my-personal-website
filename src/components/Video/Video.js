import React from "react";
import "./Video.css";
import { Link } from "react-router-dom";

import espacoVideo from "../../assets/Espaço.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={espacoVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>
          Maique Moraes
        </h1>
        <p>Desenvolvedor</p>
        <Link to="/projects" className="btn">
          Projetos
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contato
        </Link>
      </div>
    </div>
  );
};

export default Video;
