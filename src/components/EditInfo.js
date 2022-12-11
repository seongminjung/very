import React, { useState, useEffect } from "react";
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
        <h1>기수 정보 수정</h1>
        <input
          type="number"
          name="currentGen"
          value={currentGen}
          onChange={onChange}
          placeholder="현재 기수"
          autoComplete="off"
          required
        />
        <label className="toggler-wrapper style-1">
          <input
            type="checkbox"
            id="isRecruiting"
            name="isRecruiting"
            checked={isRecruiting}
            onChange={onChange}
            placeholder="모집 여부"
            autoComplete="off"
          />
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
        </label>
        <p>모집 중</p>
        <input type="submit" value="수정" />
      </form>
    </>
  );
};

export default EditInfo;
