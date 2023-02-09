import React from "react";
import { Link } from "react-router-dom";
import logo from "img/logo/로고_가로형_검정.png";
import "css/navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="logo" />
      </Link>
      <div className="nav-link">
        <Link to="/">
          <div className="nav-link__item">
            <p>Home</p>
          </div>
        </Link>
        <Link to="/recruit">
          <div className="nav-link__item">
            <p>Recruit</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="nav-link__item">
            <p>About Us</p>
          </div>
        </Link>
        <Link to="/awards">
          <div className="nav-link__item">
            <p>Awards</p>
          </div>
        </Link>
        <Link to="/clubofficers">
          <div className="nav-link__item">
            <p>Club Officers</p>
          </div>
        </Link>
        <Link to="/alumni">
          <div className="nav-link__item">
            <p>Alumni</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
