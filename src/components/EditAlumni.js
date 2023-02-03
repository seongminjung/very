import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fb_info";
import "css/admin.css";
import defaultCompany from "img/picture/defaultCompany.jpg";

const EditAlumni = ({ userObj }) => {
  const [alumni, setAlumni] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [alumniLogo, setAlumniLogo] = useState(null);
  useEffect(() => {
    dbService.collection("alumni").onSnapshot((snapshot) => {
      const alumniArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAlumni(alumniArray);
    });
  }, []);
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
  const onFileChange = async (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAlumniLogo(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onclearPhoto = () => setAlumniLogo(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    let logoUrl = null;
    const createdAt = Date.now();
    if (alumniLogo) {
      const fileRef = storageService.ref().child(`alumniLogo/${createdAt}.png`);
      const response = await fileRef.putString(alumniLogo, "data_url");
      logoUrl = await response.ref.getDownloadURL();
    }
    await dbService.collection("alumni").add({
      name,
      url,
      description,
      logoUrl,
      createdAt,
    });
    setName("");
    setUrl("");
    setDescription("");
    onclearPhoto();
    alert("추가되었습니다.");
  };
  const onDelete = async (id, imgUrl) => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) {
      await dbService.collection("alumni").doc(id).delete();
      if (imgUrl) {
        await storageService.refFromURL(imgUrl).delete();
      }
    }
  };
  return (
    <>
      <p className="adm-sectiontitle">알럼나이 기업</p>
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
      <form className="adm-textform" onSubmit={onSubmit}>
        <p className="adm-editpartner-subtitle">알럼나이 기업 추가</p>
        <p className="adm-editpartner-subtitle">협력 기업 추가</p>
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
        <label htmlFor="url">홈페이지 주소</label>
        <input
          type="text"
          name="url"
          value={url}
          onChange={onChange}
          placeholder="홈페이지 주소"
          autoComplete="off"
          required
        />
        <br />
        <label htmlFor="description">알럼나이 설명 (100자 이내)</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
          placeholder="알럼나이 설명"
          autoComplete="off"
          maxLength="100"
          required
        />
        <br />
        {alumniLogo ? (
          <div className="adm-partner-logopreview">
            <img src={alumniLogo} alt="profile" />
            <p onClick={onclearPhoto}>이미지 삭제</p>
          </div>
        ) : (
          <div>
            <label className="adm-partner-imgupload" htmlFor="adm-partner-logo">
              로고 이미지 업로드
            </label>
            <input
              id="adm-partner-logo"
              type="file"
              accept="image/*"
              onChange={onFileChange}
            />
          </div>
        )}
        <br />
        <button className="adm-co-editbutton" type="submit">
          추가
        </button>
      </form>
      <p className="adm-editpartner-subtitle">현재 기업 목록</p>
      <div className="adm-partners-grid">
        {alumni
          .slice(0)
          .reverse()
          .map((alumni) => (
            <div className="adm-partner-wrapper" key={alumni.name}>
              <p className="adm-partner-info">{alumni.name}</p>
              <p className="adm-partner-info">{alumni.description}</p>
              <p className="adm-partner-info">{alumni.url}</p>
              <img
                className="p5-cooperates__img"
                src={alumni.logoUrl ? alumni.logoUrl : defaultCompany}
                alt="logo"
              />
              <p
                className="adm-partner-edititem"
                onClick={() => onDelete(alumni.id, alumni.logoUrl)}
              >
                삭제
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default EditAlumni;
