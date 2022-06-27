import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>Maique Moraes</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/pricing">Preço</Link>
        </li>
        <li>
          <Link to="/training">Treino</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
      <div className="hamburguer" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
