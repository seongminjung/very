import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/recruit4.css";

const Recruit4 = () => {
  const [currentGen, setCurrentGen] = useState();
  const [isRecruiting, setIsRecruiting] = useState();
  useEffect(() => {
    dbService.collection("info").onSnapshot((snapshot) => {
      const info = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setCurrentGen(info[0].currentGen);
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
                width="53.447"
                height="18.192"
                viewBox="0 0 53.447 18.192"
              >
                <path
                  id="Path_164"
                  data-name="Path 164"
                  d="M-5665.666,2641.873l17.36,15.393v-52.335"
                  transform="translate(2658.378 5665.998) rotate(90)"
                  fill="#fff"
                  stroke="#000"
                  stroke-width="1"
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
        <p className="r4-detail">VERY {currentGen + 1}기 모집중입니다.</p>
      ) : (
        <p className="r4-detail">VERY {currentGen}기 모집이 마감되었습니다.</p>
      )}
    </div>
  );
};

export default Recruit4;
