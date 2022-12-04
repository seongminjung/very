import React from "react";
import { Link } from "react-router-dom";
import facebook from "img/asset/facebook.png";
import instagram from "img/asset/instagram.png";
import "css/footer.css";

const Footer = () => {
  return (
    <div className="">
      <div className="container-fluid footer-borderline">
        <div className="container footer-top">
          <div className="footer-link">
            <Link to="/">
              <div className="footer-link__item">
                <p>Home</p>
              </div>
            </Link>
            <Link to="/recruit">
              <div className="footer-link__item">
                <p>Recruit</p>
              </div>
            </Link>
            <Link to="/about">
              <div className="footer-link__item">
                <p>About Us</p>
              </div>
            </Link>
            <Link to="/awards">
              <div className="footer-link__item">
                <p>Awards</p>
              </div>
            </Link>
            <Link to="/clubofficers">
              <div className="footer-link__item">
                <p>Club Officers</p>
              </div>
            </Link>
          </div>
          <div>
            <p className="footer-top__description">
              Experience is open to everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="container footer-middle">
        <div className="footer-middle__left">
          <p>CONTACT</p>
          <p>very.official.kr@gmail.com</p>
          <p>&copy; 2021, VERY, ALL RIGHTS RESERVED.</p>
          <div className="footer-social">
            <img className="footer-social__img" src={facebook} alt="facebook" />
            <img
              className="footer-social__img"
              src={instagram}
              alt="instagram"
            />
          </div>
        </div>
        <div className="footer-middle__right">
          <p>회장 | 010-4035-3745</p>
          <p>&lt;taeyun329@yonsei.ac.kr&gt;</p>
          <div className="footer-madeby">
            <Link to="/">
              <p>Director_임채현</p>
            </Link>
            <Link to="/">
              <p>Designer_유혜리</p>
            </Link>
            <Link to="/">
              <p>Developer_정성민</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
