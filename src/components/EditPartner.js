import React, { useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const EditPartner = ({ userObj }) => {
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
      <form className="adm-textform" onSubmit={onSubmit}>
        <p className="adm-sectiontitle">협력 기업 수정</p>
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
        <label htmlFor="name">기업명</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="기업명"
          autoComplete="off"
          required
        />
        <br />
        <label htmlFor="url">웹사이트 주소</label>
        <input
          type="text"
          name="url"
          value={url}
          onChange={onChange}
          placeholder="웹사이트 주소"
          autoComplete="off"
          required
        />
        <br />
        <input type="submit" value="추가" />
      </form>
    </>
  );
};

export default EditPartner;
