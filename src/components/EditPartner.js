import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fb_info";
import "css/admin.css";
import defaultCompany from "img/picture/defaultCompany.jpg";

const EditPartner = ({ userObj }) => {
  const [partners, setPartners] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [partnerLogo, setPartnerLogo] = useState(null);
  useEffect(() => {
    dbService.collection("partners").onSnapshot((snapshot) => {
      const partnerArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPartners(partnerArray);
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
      setPartnerLogo(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onclearPhoto = () => setPartnerLogo(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    let logoUrl = null;
    if (partnerLogo) {
      const fileRef = storageService.ref().child(`partnerLogo/${name}.png`);
      const response = await fileRef.putString(partnerLogo, "data_url");
      logoUrl = await response.ref.getDownloadURL();
    }
    await dbService.collection("partners").add({
      name,
      url,
      logoUrl,
    });
    setName("");
    setUrl("");
    onclearPhoto();
    alert("추가되었습니다.");
  };
  const onDelete = async (id, imgUrl) => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) {
      await dbService.collection("partners").doc(id).delete();
      if (imgUrl) {
        await storageService.refFromURL(imgUrl).delete();
      }
    }
  };
  return (
    <>
      <p className="adm-sectiontitle">협력 기업</p>
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
        {partnerLogo ? (
          <div className="adm-partner-logopreview">
            <img src={partnerLogo} alt="profile" />
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
        {partners.map((partner) => (
          <div className="adm-partner-wrapper" key={partner.name}>
            <p className="adm-partner-info">{partner.name}</p>
            <p className="adm-partner-info">{partner.url}</p>
            <img
              className="p5-cooperates__img"
              src={partner.logoUrl ? partner.logoUrl : defaultCompany}
              alt="logo"
            />
            <p
              className="adm-partner-edititem"
              onClick={() => onDelete(partner.id, partner.logoUrl)}
            >
              삭제
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditPartner;
