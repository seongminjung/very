import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blog from "img/main/blog.png";
import facebook from "img/main/facebook.png";
import instagram from "img/main/instagram.png";
import youtube from "img/main/youtube.png";
import "css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-link">
          <Link to="/">
            <div className="footer-link__item">
              <p>Home</p>
              <FontAwesomeIcon icon="caret-down" />
            </div>
          </Link>
          <div className="footer-link__item">
            <p>About Us</p>
            <FontAwesomeIcon icon="caret-down" />
          </div>
          <Link to="/alumni">
            <div className="footer-link__item">
              <p>Alumni Members</p>
              <FontAwesomeIcon icon="caret-down" />
            </div>
          </Link>
        </div>
        <div>
          <p className="footer-top__description">
            Our Experiences Are Parts Of Ourselves.
          </p>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-middle__row fmrow1">
          <p>CONTACT</p>
          <p>회장 | 010-4129-3273</p>
        </div>
        <div className="footer-middle__row fmrow2">
          <p>VERY@VERY.co.kr</p>
          <p>&lt;natebear9936@yonsei.ac.kr&gt;</p>
        </div>
        <div className="footer-middle__row fmrow3">
          <div className="footer-social">
            <img className="footer-social__img" src={facebook} alt="blog" />
            <img className="footer-social__img" src={instagram} alt="blog" />
            <img className="footer-social__img" src={blog} alt="blog" />
            <img className="footer-social__img" src={youtube} alt="blog" />
          </div>
          <p>&copy; 2021, VERY, ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
