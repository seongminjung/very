import React, { useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const AddAward = ({ userObj }) => {
  const [contestname, setContestname] = useState("");
  const [itemname, setItemname] = useState("");
  const [prizemoney, setPrizemoney] = useState("");
  const [participants, setParticipants] = useState("");
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "contestname") {
      setContestname(value);
    } else if (name === "itemname") {
      setItemname(value);
    } else if (name === "prizemoney") {
      setPrizemoney(value);
    } else if (name === "participants") {
      setParticipants(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    await dbService.collection("awards").add({
      contestname,
      itemname,
      prizemoney,
      date: Date.now(),
      participants,
    });
    setContestname("");
    setItemname("");
    setPrizemoney("");
    setParticipants("");
    alert("추가되었습니다.");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>공모전 추가</h1>
        <input
          type="text"
          name="contestname"
          value={contestname}
          onChange={onChange}
          placeholder="대회명"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="itemname"
          value={itemname}
          onChange={onChange}
          placeholder="제목"
          autoComplete="off"
          required
        />
        <input
          type="number"
          name="prizemoney"
          value={prizemoney}
          onChange={onChange}
          placeholder="상금액"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="participants"
          value={participants}
          onChange={onChange}
          placeholder="인원"
          autoComplete="off"
          required
        />
        <input type="submit" value="추가" />
      </form>
    </>
  );
};

export default AddAward;
