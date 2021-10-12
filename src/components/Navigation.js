import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "img/logo.png";
import "css/navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <img className="nav-logo" src={logo} alt="logo" />
      <div className="nav-link">
        <div className="nav-link__item">
          <p>Home</p>
          <FontAwesomeIcon icon="caret-down" />
        </div>
        <div className="nav-link__item">
          <p>About Us</p>
          <FontAwesomeIcon icon="caret-down" />
        </div>
        <div className="nav-link__item">
          <p>Alumni Members</p>
          <FontAwesomeIcon icon="caret-down" />
        </div>
        <FontAwesomeIcon icon="bars" className="nav-menu" />
      </div>
    </div>
  );
};

export default Navigation;
