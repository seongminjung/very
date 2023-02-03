import React, { useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const EditAlumni = ({ userObj }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
    } else if (name === "url") {
      setUrl(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    await dbService.collection("companies").add({
      name,
      url,
      description,
    });
    setName("");
    setUrl("");
    setDescription("");
    alert("추가되었습니다.");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>알럼나이 추가</h1>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="알럼나이 명칭"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="url"
          value={url}
          onChange={onChange}
          placeholder="알럼나이 홈페이지 주소"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
          placeholder="알럼나이 설명 (100자 이내)"
          autoComplete="off"
          maxlength="100"
          required
        />
        <input type="submit" value="추가" />
      </form>
    </>
  );
};

export default EditAlumni;
