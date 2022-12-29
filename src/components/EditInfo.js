import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const EditInfo = ({ userObj }) => {
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
  const onChange = async (event) => {
    const {
      target: { name, value, checked },
    } = event;
    if (name === "currentGen") {
      setCurrentGen(Number(value));
    } else if (name === "isRecruiting") {
      setIsRecruiting(checked);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    await dbService.collection("info").doc("info").update({
      currentGen,
      isRecruiting,
    });
    alert("수정되었습니다.");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <p className="adm-sectiontitle">기본 정보</p>
        <div className="adm-sectionbar">
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
        <div className="adm-editinfo-input-wrapper">
          <p>현재 기수</p>
          <input
            className="adm-editinfo-gen"
            type="number"
            name="currentGen"
            value={currentGen ? currentGen : 0}
            onChange={onChange}
            placeholder="현재 기수"
            autoComplete="off"
            required
          />
        </div>
        <div className="adm-editinfo-input-wrapper">
          <p>모집 중</p>
          <label className="toggler-wrapper style-1">
            <input
              type="checkbox"
              id="isRecruiting"
              name="isRecruiting"
              checked={isRecruiting ? isRecruiting : false}
              onChange={onChange}
              autoComplete="off"
            />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
        </div>
        <input type="submit" value="수정" />
      </form>
    </>
  );
};

export default EditInfo;
