import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import ClubofficerTile from "components/ClubofficerTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/admin.css";
import profile1 from "img/profile/임채현.png";

const AddClubmembers = ({ userObj }) => {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [gen, setGen] = useState([]);
  useEffect(() => {
    dbService.collection("clubofficers").onSnapshot((snapshot) => {
      const row = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setRow1(row[0]["officers"]);
      setRow2(row[1]["officers"]);
    });
  }, []);
  useEffect(() => {
    dbService.collection("info").onSnapshot((snapshot) => {
      const info = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setGen(info[0].currentGen);
    });
  }, []);
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      // setName(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    await dbService.collection("partners").add({
      // name,
    });
    // setName("");
    alert("추가되었습니다.");
  };
  return (
    <div className="container">
      <p className="co2-title">임원진 수정 - {gen}기</p>
      <p className="co2-subtitle">
        {Math.floor((gen + 1) / 2) + 4}-{gen % 2 ? 1 : 2}학기
      </p>
      <div className="co2-bar">
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
      <p className="adm-co-rowtitle">첫째 줄</p>
      <div className="co2-headofficer__wrapper">
        {row1.length !== 0 &&
          row1.map((item) => (
            <div className="adm-co-tilewrapper">
              <ClubofficerTile
                key={item.contact}
                gen={gen}
                name={item.name}
                pos={item.position}
                contact={item.contact}
                email={item.email}
                profileImg={profile1}
              />
              <div className="adm-co-editflex">
                <p className="adm-co-edititem">수정</p>
                <p className="adm-co-edititem">삭제</p>
              </div>
            </div>
          ))}
        <div className="adm-co-add">
          <FontAwesomeIcon icon="plus" />
        </div>
      </div>
      <p className="adm-co-rowtitle">둘째 줄</p>
      <div className="co2-viceofficer__wrapper">
        {row2.length !== 0 &&
          row2.map((item) => (
            <div className="adm-co-tilewrapper">
              <ClubofficerTile
                key={item.contact}
                gen={gen}
                name={item.name}
                pos={item.position}
                contact={item.contact}
                email={item.email}
                profileImg={profile1}
              />
              <div className="adm-co-editflex">
                <p className="adm-co-edititem">수정</p>
                <p className="adm-co-edititem">삭제</p>
              </div>
            </div>
          ))}
        <div className="adm-co-add">
          <FontAwesomeIcon icon="plus" />
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <h1>임원진 수정</h1>
        <h2>첫줄</h2>
        <input
          type="text"
          name="name"
          // value={name}
          onChange={onChange}
          placeholder="협력 기업 명칭"
          autoComplete="off"
          required
        />
        <h2>둘째줄</h2>
        <input
          type="text"
          name="name"
          // value={name}
          onChange={onChange}
          placeholder="협력 기업 명칭"
          autoComplete="off"
          required
        />
        <br />
        <input type="submit" value="수정" />
      </form>
    </div>
  );
};

export default AddClubmembers;
