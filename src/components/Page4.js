import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dbService } from "fb_info";
import "css/page4.css";
import p4image1 from "img/picture/p4image1.png";
import p4background from "img/picture/p4background.png";

const Page4 = () => {
  const [images, setImages] = useState();
  useEffect(() => {
    dbService.collection("activity").onSnapshot((snapshot) => {
      const activityArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      const imageUrls = activityArray.reverse().map((activity) => activity.url);
      if (imageUrls.length < 3) {
        imageUrls.unshift(p4image1);
      }
      setImages(imageUrls);
    });
  }, []);
  return (
    <div className="container-fluid p4-relative">
      <img className="p4-background" src={p4background} alt="background" />
      <div className="container">
        <p className="p4-title">Activity Record</p>
        <p className="p4-subtitle">활동 기록</p>
        <div className="p4-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="7"
            viewBox="0 0 23 7"
          >
            <rect
              id="사각형_227"
              data-name="사각형 227"
              width="23"
              height="7"
              fill="#d3d3d3"
            />
          </svg>
        </div>
        <div className="p4-carousel">
          <div className="p4-carousel-ctrlbtn">
            <p>
              <FontAwesomeIcon icon="chevron-left" />
            </p>
          </div>
          <div className="p4-img-flex">
            <div className="p4-img">
              <img src={images && images[0]} alt="p4mainimage1" />
            </div>
            <div className="p4-img">
              <img src={images && images[1]} alt="p4mainimage2" />
            </div>
            <div className="p4-img">
              <img src={images && images[2]} alt="p4mainimage3" />
            </div>
          </div>
          <div className="p4-carousel-ctrlbtn">
            <p>
              <FontAwesomeIcon icon="chevron-right" />
            </p>
          </div>
        </div>
        <div className="p4-imgdot">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="16"
            viewBox="0 0 78 16"
          >
            <circle
              id="타원_177"
              data-name="타원 177"
              cx="5"
              cy="5"
              r="5"
              transform="translate(0 3)"
              fill="#c3c3c3"
            />
            <circle
              id="타원_176"
              data-name="타원 176"
              cx="8"
              cy="8"
              r="8"
              transform="translate(31)"
              fill="#0074e8"
            />
            <circle
              id="타원_180"
              data-name="타원 180"
              cx="5"
              cy="5"
              r="5"
              transform="translate(68 3)"
              fill="#c3c3c3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page4;
