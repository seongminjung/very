import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/recruit4.css";

const Recruit4 = () => {
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
    <div className="container">
      <p className="r4-title">Apply</p>
      <div className="r4-door">
        {isRecruiting ? (
          <>
            <div className="r4-door__image-open" />
            <div className="r4-clickhere">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.138"
                height="10.46"
                viewBox="0 0 30.138 10.46"
              >
                <path
                  id="패스_164"
                  data-name="패스 164"
                  d="M-5665.667,2625.42l9.629,8.538v-29.027"
                  transform="translate(2635.07 5665.998) rotate(90)"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="1"
                />
              </svg>
              <p>Click here</p>
            </div>
          </>
        ) : (
          <div className="r4-door__image-closed" />
        )}
      </div>
      {isRecruiting ? (
        <p className="r4-detail">VERY 35기 모집중입니다.</p>
      ) : (
        <p className="r4-detail">VERY 34기 모집이 마감되었습니다.</p>
      )}
    </div>
  );
};

export default Recruit4;
