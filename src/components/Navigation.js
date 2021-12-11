import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "img/logo.png";
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
            <FontAwesomeIcon icon="caret-down" />
          </div>
        </Link>
        <Link to="/recruit">
          <div className="nav-link__item">
            <p>Recruit</p>
            <FontAwesomeIcon icon="caret-down" />
          </div>
        </Link>
        <Link to="/about">
          <div className="nav-link__item">
            <p>About Us</p>
            <FontAwesomeIcon icon="caret-down" />
          </div>
        </Link>
        <Link to="/awards">
          <div className="nav-link__item">
            <p>Awards</p>
            <FontAwesomeIcon icon="caret-down" />
          </div>
        </Link>
        <Link to="/alumni">
          <div className="nav-link__item">
            <p>Alumni</p>
            <FontAwesomeIcon icon="caret-down" />
          </div>
        </Link>
        <FontAwesomeIcon icon="bars" className="nav-menu" />
      </div>
    </div>
  );
};

export default Navigation;
