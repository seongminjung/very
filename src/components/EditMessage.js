import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const EditMessage = ({ userObj }) => {
  const [phrase, setPhrase] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    dbService.collection("message").onSnapshot((snapshot) => {
      const message = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setPhrase(message[0].phrase);
      setTitle(message[0].title);
      setBody(message[0].body);
    });
  }, []);
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "phrase") {
      setPhrase(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "body") {
      setBody(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    await dbService.collection("message").doc("message").update({
      phrase,
      title,
      body,
    });
    alert("수정되었습니다.");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <p className="adm-sectiontitle">회장 인사말 수정</p>
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
        <label className="adm-editmsg-label" htmlFor="adm-editmsg-phrase">
          대표문구
        </label>
        <textarea
          className="adm-editmsg-phrase"
          id="adm-editmsg-phrase"
          name="phrase"
          value={phrase}
          onChange={onChange}
        ></textarea>
        <label className="adm-editmsg-label" htmlFor="adm-editmsg-title">
          제목
        </label>
        <textarea
          className="adm-editmsg-title"
          id="adm-editmsg-title"
          name="title"
          value={title}
          onChange={onChange}
        ></textarea>
        <label className="adm-editmsg-label" htmlFor="adm-editmsg-textarea">
          내용
        </label>
        <textarea
          className="adm-editmsg-textarea"
          id="adm-editmsg-textarea"
          name="body"
          value={body}
          onChange={onChange}
        ></textarea>
        <input className="adm-message-submit" type="submit" value="수정" />
      </form>
    </>
  );
};

export default EditMessage;
