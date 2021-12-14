import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "img/logo.png";
import "css/navigation.css";

const Navigation = () => {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened((prev) => !prev);
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
        <div className="nav-link__item nav-ac" onClick={toggle}>
          <p>Alumni</p>
          <FontAwesomeIcon icon="caret-down" />
          {opened && (
            <div className="nav-ac__flex">
              <Link to="/companies">
                <p className="nav-ac__item">Companines</p>
              </Link>
              <Link to="/clubofficers">
                <p className="nav-ac__item">Club Officers</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
