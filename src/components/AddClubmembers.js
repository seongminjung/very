import React, { useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const AddClubmembers = ({ userObj }) => {
  const [name, setName] = useState("");
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    await dbService.collection("partners").add({
      name,
    });
    setName("");
    alert("추가되었습니다.");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>임원진 수정</h1>
        <h2>첫줄</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="협력 기업 명칭"
          autoComplete="off"
          required
        />
        <h2>둘째줄</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="협력 기업 명칭"
          autoComplete="off"
          required
        />
        <br />
        <input type="submit" value="수정" />
      </form>
    </>
  );
};

export default AddClubmembers;
