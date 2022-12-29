import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fb_info";
import ClubofficerTile from "components/ClubofficerTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/admin.css";

const EditClubofficers = ({ userObj }) => {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row1Name, setRow1Name] = useState("");
  const [row1Position, setRow1Position] = useState("");
  const [row1Contact, setRow1Contact] = useState("");
  const [row1Email, setRow1Email] = useState("");
  const [row1Img, setRow1Img] = useState(null);
  const [row2Name, setRow2Name] = useState("");
  const [row2Position, setRow2Position] = useState("");
  const [row2Contact, setRow2Contact] = useState("");
  const [row2Email, setRow2Email] = useState("");
  const [row2Img, setRow2Img] = useState(null);
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
  const onFile1Change = async (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setRow1Img(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onFile2Change = async (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setRow2Img(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onclearPhoto1 = () => setRow1Img(null);
  const onclearPhoto2 = () => setRow2Img(null);
  const onAdd = async (event, row) => {
    event.preventDefault();
    const imgInCurrentRow = row === 1 ? row1Img : row2Img;
    let url = null;
    if (imgInCurrentRow) {
      const fileRef = storageService
        .ref()
        .child(`profile/${row === 1 ? row1Name : row2Name}.png`);
      const response = await fileRef.putString(imgInCurrentRow, "data_url");
      url = await response.ref.getDownloadURL();
    }
    const item = {
      name: row === 1 ? row1Name : row2Name,
      position: row === 1 ? row1Position : row2Position,
      contact: row === 1 ? row1Contact : row2Contact,
      email: row === 1 ? row1Email : row2Email,
      url: imgInCurrentRow ? url : null,
    };
    const targetRow = row === 1 ? row1 : row2;
    await dbService
      .collection("clubofficers")
      .doc(row === 1 ? "row1" : "row2")
      .update({
        officers: [...targetRow, item],
      });
    row === 1 ? toggleAddRow1Form() : toggleAddRow2Form();
    row === 1 ? onclearPhoto1() : onclearPhoto2();
  };
  const onDelete = async (row, index, imgUrl) => {
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
      if (imgUrl) {
        await storageService.refFromURL(imgUrl).delete();
      }
    }
  };
  return (
    <div className="container">
      <p className="adm-sectiontitle">임원진 - {gen}기</p>
      <p className="adm-sectionsubtitle">
        {Math.floor((gen + 1) / 2) + 4}-{gen % 2 ? 1 : 2}학기
      </p>
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
      <p className="adm-co-rowtitle">첫째 줄</p>
      <div className="co2-headofficer__wrapper">
        {row1.length !== 0 &&
          row1.map((item, index) => (
            <div className="adm-co-tilewrapper" key={item.contact}>
              <ClubofficerTile
                gen={gen}
                name={item.name}
                pos={item.position}
                contact={item.contact}
                email={item.email}
                profileImg={item.url}
              />
              <div className="adm-co-editflex">
                {/* TODO: 수정 기능 */}
                {/* <p className="adm-co-edititem">수정</p> */}
                <p
                  className="adm-co-edititem"
                  onClick={() => onDelete(1, index, item.url)}
                >
                  삭제
                </p>
              </div>
            </div>
          ))}
        {addRow1FormOpened ? (
          <div className="adm-co-addofficertile">
            <form onSubmit={(e) => onAdd(e, 1)}>
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
              {row1Img ? (
                <div className="adm-co-profilepreview">
                  <img src={row1Img} alt="profile" />
                  <p onClick={onclearPhoto1}>이미지 삭제</p>
                </div>
              ) : (
                <div>
                  <label className="adm-co-imgupload" htmlFor="adm-co-profile">
                    프로필 사진 업로드
                  </label>
                  <input
                    id="adm-co-profile"
                    type="file"
                    accept="image/*"
                    onChange={onFile1Change}
                  />
                </div>
              )}
              <div className="adm-co-editflex">
                <button
                  type="button"
                  className="adm-co-editbutton"
                  onClick={() => {
                    toggleAddRow1Form();
                    onclearPhoto1();
                  }}
                >
                  취소
                </button>
                <button className="adm-co-editbutton" type="submit">
                  추가
                </button>
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
            <div className="adm-co-tilewrapper" key={item.contact}>
              <ClubofficerTile
                gen={gen}
                name={item.name}
                pos={item.position}
                contact={item.contact}
                email={item.email}
                profileImg={item.url}
              />
              <div className="adm-co-editflex">
                {/* <p className="adm-co-edititem">수정</p> */}
                <p
                  className="adm-co-edititem"
                  onClick={() => onDelete(2, index, item.url)}
                >
                  삭제
                </p>
              </div>
            </div>
          ))}
        {addRow2FormOpened ? (
          <div className="adm-co-addofficertile">
            <form onSubmit={(e) => onAdd(e, 2)}>
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
              {row2Img ? (
                <div className="adm-co-profilepreview">
                  <img src={row2Img} alt="profile" />
                  <p onClick={onclearPhoto2}>이미지 삭제</p>
                </div>
              ) : (
                <div>
                  <label className="adm-co-imgupload" htmlFor="adm-co-profile">
                    프로필 사진 업로드
                  </label>
                  <input
                    id="adm-co-profile"
                    type="file"
                    accept="image/*"
                    onChange={onFile2Change}
                  />
                </div>
              )}
              <div className="adm-co-editflex">
                <button
                  type="button"
                  className="adm-co-editbutton"
                  onClick={() => {
                    toggleAddRow2Form();
                    onclearPhoto2();
                  }}
                >
                  취소
                </button>
                <button className="adm-co-editbutton" type="submit">
                  추가
                </button>
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
