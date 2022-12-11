import React, { useState } from "react";
import { dbService } from "fb_info";
import "css/admin.css";

const EditAward = ({ userObj }) => {
  const [contestname, setContestname] = useState("");
  const [host, setHost] = useState("");
  const [itemname, setItemname] = useState("");
  const [prizemoney, setPrizemoney] = useState("");
  const [prizetype, setPrizetype] = useState("");
  const [teamname, setTeamname] = useState("");
  const [participants, setParticipants] = useState("");
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "contestname") {
      setContestname(value);
    } else if (name === "host") {
      setHost(value);
    } else if (name === "itemname") {
      setItemname(value);
    } else if (name === "prizemoney") {
      setPrizemoney(value);
    } else if (name === "prizetype") {
      setPrizetype(value);
    } else if (name === "teamname") {
      setTeamname(value);
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
      host,
      itemname,
      prizemoney,
      prizetype,
      teamname,
      date: Date.now(),
      participants,
    });
    setContestname("");
    setHost("");
    setItemname("");
    setPrizemoney("");
    setPrizetype("");
    setTeamname("");
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
          name="host"
          value={host}
          onChange={onChange}
          placeholder="주관"
          autoComplete="off"
          required
        />
        <input
          type="test"
          name="itemname"
          value={itemname}
          onChange={onChange}
          placeholder="아이템명"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="teamname"
          value={teamname}
          onChange={onChange}
          placeholder="팀명"
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
          name="prizetype"
          value={prizetype}
          onChange={onChange}
          placeholder="수상 종류"
          autoComplete="off"
          required
        />
        <input
          type="number"
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

export default EditAward;
