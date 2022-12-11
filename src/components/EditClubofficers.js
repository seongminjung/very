import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import ClubofficerTile from "components/ClubofficerTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/admin.css";
import profile1 from "img/profile/임채현.png";

const EditClubofficers = ({ userObj }) => {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row1Name, setRow1Name] = useState("");
  const [row1Position, setRow1Position] = useState("");
  const [row1Contact, setRow1Contact] = useState("");
  const [row1Email, setRow1Email] = useState("");
  const [row2Name, setRow2Name] = useState("");
  const [row2Position, setRow2Position] = useState("");
  const [row2Contact, setRow2Contact] = useState("");
  const [row2Email, setRow2Email] = useState("");
  const [gen, setGen] = useState([]);
  const [addRow1FormOpened, setAddRow1FormOpened] = useState(false);
  const [addRow2FormOpened, setAddRow2FormOpened] = useState(false);
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
  const toggleAddRow1Form = () => setAddRow1FormOpened((prev) => !prev);
  const toggleAddRow2Form = () => setAddRow2FormOpened((prev) => !prev);
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "row1Name") {
      setRow1Name(value);
    } else if (name === "row1Position") {
      setRow1Position(value);
    } else if (name === "row1Contact") {
      setRow1Contact(value);
    } else if (name === "row1Email") {
      setRow1Email(value);
    } else if (name === "row2Name") {
      setRow2Name(value);
    } else if (name === "row2Position") {
      setRow2Position(value);
    } else if (name === "row2Contact") {
      setRow2Contact(value);
    } else if (name === "row2Email") {
      setRow2Email(value);
    }
  };
  const onAdd = async (event, row) => {
    event.preventDefault();
    console.log(row);
    const item = {
      name: row === 1 ? row1Name : row2Name,
      position: row === 1 ? row1Position : row2Position,
      contact: row === 1 ? row1Contact : row2Contact,
      email: row === 1 ? row1Email : row2Email,
    };
    const targetRow = row === 1 ? row1 : row2;
    await dbService
      .collection("clubofficers")
      .doc(row === 1 ? "row1" : "row2")
      .update({
        officers: [...targetRow, item],
      });
    row === 1 ? toggleAddRow1Form() : toggleAddRow2Form();
  };
  const onDelete = async (row, index) => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) {
      const targetRow = row === 1 ? row1 : row2;
      targetRow.splice(index, 1);
      await dbService
        .collection("clubofficers")
        .doc(row === 1 ? "row1" : "row2")
        .update({
          officers: targetRow,
        });
    }
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
          row1.map((item, index) => (
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
                {/* TODO: 수정 기능 */}
                {/* <p className="adm-co-edititem">수정</p> */}
                <p
                  className="adm-co-edititem"
                  onClick={() => onDelete(1, index)}
                >
                  삭제
                </p>
              </div>
            </div>
          ))}
        {addRow1FormOpened ? (
          <div className="adm-co-addofficertile">
            <form onSubmit={(e) => onAdd(e, 1)}>
              <div className="adm-co-inputs">
                <p className="adm-co-form-label">이름: </p>
                <input
                  id="name"
                  name="row1Name"
                  type="text"
                  placeholder="ex) 홍길동"
                  onChange={onChange}
                  required
                />
                <br />
                <p className="adm-co-form-label">직책: </p>
                <input
                  id="position"
                  name="row1Position"
                  type="text"
                  placeholder="ex) 회장"
                  onChange={onChange}
                  required
                />
                <br />
                <p className="adm-co-form-label">전화번호: </p>
                <input
                  id="contact"
                  name="row1Contact"
                  type="text"
                  placeholder="ex) 010-1234-5678"
                  onChange={onChange}
                  required
                />
                <br />
                <p className="adm-co-form-label">이메일: </p>
                <input
                  id="email"
                  name="row1Email"
                  type="email"
                  placeholder="ex) abc@gmail.com"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="adm-co-buttons">
                <button onClick={toggleAddRow1Form}>취소</button>
                <button onClick={(e) => onAdd(e, 1)}>추가</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="adm-co-add" onClick={toggleAddRow1Form}>
            <FontAwesomeIcon icon="plus" />
          </div>
        )}
      </div>
      <p className="adm-co-rowtitle">둘째 줄</p>
      <div className="co2-viceofficer__wrapper">
        {row2.length !== 0 &&
          row2.map((item, index) => (
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
                {/* <p className="adm-co-edititem">수정</p> */}
                <p
                  className="adm-co-edititem"
                  onClick={() => onDelete(2, index)}
                >
                  삭제
                </p>
              </div>
            </div>
          ))}
        {addRow2FormOpened ? (
          <div className="adm-co-addofficertile">
            <form>
              <p className="adm-co-form-label">이름: </p>
              <input
                id="name"
                name="row2Name"
                type="text"
                placeholder="ex) 홍길동"
                onChange={onChange}
                required
              />
              <br />
              <p className="adm-co-form-label">직책: </p>
              <input
                id="position"
                name="row2Position"
                type="text"
                placeholder="ex) 회장"
                onChange={onChange}
                required
              />
              <br />
              <p className="adm-co-form-label">전화번호: </p>
              <input
                id="contact"
                name="row2Contact"
                type="text"
                placeholder="ex) 010-1234-5678"
                onChange={onChange}
                required
              />
              <br />
              <p className="adm-co-form-label">이메일: </p>
              <input
                id="email"
                name="row2Email"
                type="email"
                placeholder="ex) abc@gmail.com"
                onChange={onChange}
                required
              />
              <div className="adm-co-buttons">
                <button onClick={toggleAddRow2Form}>취소</button>
                <button onClick={(e) => onAdd(e, 2)}>추가</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="adm-co-add" onClick={toggleAddRow2Form}>
            <FontAwesomeIcon icon="plus" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditClubofficers;
