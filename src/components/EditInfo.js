import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const EditInfo = ({ userObj }) => {
  const [currentGen, setCurrentGen] = useState();
  const [isRecruiting, setIsRecruiting] = useState();
  const [officialEmail, setOfficialEmail] = useState();
  const [officialNotion, setOfficialNotion] = useState();
  const [officialInstagram, setOfficialInstagram] = useState();
  useEffect(() => {
    dbService.collection("info").onSnapshot((snapshot) => {
      const info = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setCurrentGen(info[0].currentGen);
      setIsRecruiting(info[0].isRecruiting);
      setOfficialEmail(info[0].officialEmail);
      setOfficialNotion(info[0].officialNotion);
      setOfficialInstagram(info[0].officialInstagram);
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
    } else if (name === "officialEmail") {
      setOfficialEmail(value);
    } else if (name === "officialNotion") {
      setOfficialNotion(value);
    } else if (name === "officialInstagram") {
      setOfficialInstagram(value);
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
      officialEmail,
      officialNotion,
      officialInstagram,
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
        <div className="adm-editinfo-input-wrapper">
          <p>공식 이메일</p>
          <input
            className="adm-editinfo-email"
            type="email"
            name="officialEmail"
            value={officialEmail}
            onChange={onChange}
            placeholder="공식 이메일"
            autoComplete="off"
            required
          />
        </div>
        <div className="adm-editinfo-input-wrapper">
          <p>공식 노션 링크</p>
          <input
            className="adm-editinfo-email"
            type="text"
            name="officialNotion"
            value={officialNotion}
            onChange={onChange}
            placeholder="공식 노션 링크"
            autoComplete="off"
            required
          />
        </div>
        <div className="adm-editinfo-input-wrapper">
          <p>공식 인스타그램 링크</p>
          <input
            className="adm-editinfo-email"
            type="text"
            name="officialInstagram"
            value={officialInstagram}
            onChange={onChange}
            placeholder="공식 인스타그램 링크"
            autoComplete="off"
            required
          />
        </div>
        <button className="adm-co-editbutton" type="submit">
          수정
        </button>
      </form>
    </>
  );
};

export default EditInfo;
