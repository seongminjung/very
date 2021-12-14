import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "css/about5.css";
import logo1 from "img/main/logo-knowledge.png";
import logo2 from "img/main/logo-network.png";
import logo3 from "img/main/logo-experience.png";
import logofix from "img/main/logo-fix.png";

const About5 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
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
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </svg>
          <p className="ab5-pagenumber">03.</p>
        </div>
      </div>
      <p className="ab5-title">SYMBOL</p>
      <div className="ab5-images__flex">
        <div className="ab5-images__left">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={1000}
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
            <p>hello</p>
            {/* <img className="ab5-images__top" src={logo1} alt="logo1" />
          <img className="ab5-images__left" src={logo2} alt="logo2" />
          <img className="ab5-images__right" src={logo3} alt="logo3" /> */}
          </Carousel>
        </div>
        <div className="ab5-images__right">
          <img src={logofix} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default About5;
