import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/recruit3.css";
import processarrow from "img/asset/processarrow.png";

const Recruit3 = () => {
  const [isRecruiting, setIsRecruiting] = useState();
  useEffect(() => {
    dbService.collection("info").onSnapshot((snapshot) => {
      const info = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setIsRecruiting(info[0].isRecruiting);
    });
  }, []);
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="r3-nav">
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
                strokeWidth="2"
              />
            </svg>
            <p className="r3-pagenumber">02.</p>
          </div>
        </div>
        <p className="r3-title">Recruit Process</p>
        <div className="r3-profess__flex">
          {isRecruiting ? (
            <div className="r3-process__content">
              <div className="r3-process__date">
                <p>2022.</p>
                <p>02.09</p>
              </div>
              <div className="r3-process__detail">
                <p>모집 기간 시작일</p>
              </div>
            </div>
          ) : (
            <div className="r3-process__content__closed">
              <div className="r3-process__date__closed">
                <p>모집마감</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58"
                    height="14"
                    viewBox="0 0 58 14"
                  >
                    <g
                      id="타원_139"
                      data-name="타원 139"
                      transform="translate(22)"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                    <g
                      id="타원_140"
                      data-name="타원 140"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                    <g
                      id="타원_141"
                      data-name="타원 141"
                      transform="translate(44)"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="r3-process__detail">
                <p>모집 기간 시작일</p>
              </div>
            </div>
          )}
          <div className="r3-process__arrow">
            <img src={processarrow} alt="processarrow" />
          </div>
          {isRecruiting ? (
            <div className="r3-process__content">
              <div className="r3-process__date">
                <p>2022.</p>
                <p>02.23</p>
              </div>
              <div className="r3-process__detail">
                <p>서류지원 마감일</p>
              </div>
            </div>
          ) : (
            <div className="r3-process__content__closed">
              <div className="r3-process__date__closed">
                <p>모집마감</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58"
                    height="14"
                    viewBox="0 0 58 14"
                  >
                    <g
                      id="타원_139"
                      data-name="타원 139"
                      transform="translate(22)"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                    <g
                      id="타원_140"
                      data-name="타원 140"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                    <g
                      id="타원_141"
                      data-name="타원 141"
                      transform="translate(44)"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="r3-process__detail">
                <p>모집 기간 시작일</p>
              </div>
            </div>
          )}
          <div className="r3-process__arrow">
            <img src={processarrow} alt="processarrow" />
          </div>
          {isRecruiting ? (
            <div className="r3-process__content">
              <div className="r3-process__date">
                <p>2022.</p>
                <p>02.23</p>
              </div>
              <div className="r3-process__detail">
                <p>면접 기간 시작일</p>
              </div>
            </div>
          ) : (
            <div className="r3-process__content__closed">
              <div className="r3-process__date__closed">
                <p>모집마감</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58"
                    height="14"
                    viewBox="0 0 58 14"
                  >
                    <g
                      id="타원_139"
                      data-name="타원 139"
                      transform="translate(22)"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                    <g
                      id="타원_140"
                      data-name="타원 140"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                    <g
                      id="타원_141"
                      data-name="타원 141"
                      transform="translate(44)"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="r3-process__detail">
                <p>모집 기간 시작일</p>
              </div>
            </div>
          )}
          <div className="r3-process__arrow">
            <img src={processarrow} alt="processarrow" />
          </div>
          {isRecruiting ? (
            <div className="r3-process__content">
              <div className="r3-process__date">
                <p>2022.</p>
                <p>02.23</p>
              </div>
              <div className="r3-process__detail">
                <p>합격 발표일</p>
              </div>
            </div>
          ) : (
            <div className="r3-process__content__closed">
              <div className="r3-process__date__closed">
                <p>모집마감</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58"
                    height="14"
                    viewBox="0 0 58 14"
                  >
                    <g
                      id="타원_139"
                      data-name="타원 139"
                      transform="translate(22)"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                    <g
                      id="타원_140"
                      data-name="타원 140"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                    <g
                      id="타원_141"
                      data-name="타원 141"
                      transform="translate(44)"
                      fill="#4e4e4e"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <circle cx="7" cy="7" r="7" stroke="none" />
                      <circle cx="7" cy="7" r="6.5" fill="none" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="r3-process__detail">
                <p>모집 기간 시작일</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recruit3;
