import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "img/logo/logo-row-white.png";
import "css/navigation.css";

const Navigation = () => {
  const [opened, setOpened] = useState(false);
  const onMouseOver = () => setOpened(true);
  const onMouseLeave = () => setOpened(false);
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
        <Link to="/companies">
          <div
            className="nav-link__item"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            <div className="nav-tab">
              <p>Alumni</p>
              <FontAwesomeIcon icon="caret-down" />
            </div>
            {opened && (
              <div className="nav-tab__wrapper">
                <Link to="/companies">
                  <p className="nav-tab__item">Companines</p>
                </Link>
                <Link to="/clubofficers">
                  <p className="nav-tab__item">Club Officers</p>
                </Link>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
