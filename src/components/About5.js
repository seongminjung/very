import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "css/about5.css";
import logodots from "img/asset/logo-dots.png";
import logolines from "img/asset/logo-lines.png";
import logofaces from "img/asset/logo-faces.png";
import logofix from "img/asset/logo-fix.png";

const About5 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container ab5-relative">
      <div className="ab5-nav">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="2"
            viewBox="0 0 23 2"
          >
            <line
              id="선_108"
              data-name="선 108"
              x2="23"
              transform="translate(0 1)"
              fill="none"
              stroke="#7c7c7c"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>
          <p className="ab5-pagenumber">03.</p>
        </div>
      </div>
      <p className="ab5-title">Symbol</p>
      <div className="ab5-images__left">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          arrows={true}
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          // keyBoardControl={false}
          // ssr={true} // means to render carousel on server-side.
          // customTransition="all .5"
          // transitionDuration={500}
          // containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          <img src={logodots} alt="logodots" />
          <img src={logolines} alt="logolines" />
          <img src={logofaces} alt="logofaces" />
        </Carousel>
      </div>
      <div className="ab5-images__right">
        <img src={logofix} alt="logo" />
      </div>
    </div>
  );
};

export default About5;
