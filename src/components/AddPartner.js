import React, { useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const AddPartner = ({ userObj }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
    } else if (name === "url") {
      setUrl(value);
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
      url,
    });
    setName("");
    setUrl("");
    alert("추가되었습니다.");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>협력 기업 추가</h1>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="협력 기업 명칭"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="url"
          value={url}
          onChange={onChange}
          placeholder="협력 기업 홈페이지 주소"
          autoComplete="off"
          required
        />
        <input type="submit" value="추가" />
      </form>
    </>
  );
};

export default AddPartner;
