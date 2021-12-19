import React, { useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const AddInfo = ({ userObj }) => {
  const [currentGen, setCurrentGen] = useState("");
  const [isRecruiting, setIsRecruiting] = useState();
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "currentGen") {
      setCurrentGen(value);
    } else if (name === "isRecruiting") {
      setIsRecruiting(value);
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
      // isRecruiting,
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
        <input
          type="checkbox"
          name="isRecruiting"
          value={isRecruiting}
          onChange={onChange}
          placeholder="모집 여부"
          autoComplete="off"
          required
        />
        <input type="submit" value="수정" />
      </form>
    </>
  );
};

export default AddInfo;
