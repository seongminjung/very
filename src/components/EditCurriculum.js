import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fb_info";
import "css/admin.css";

const EditCurriculum = ({ userObj }) => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [newImage, setNewImage] = useState(null);
  useEffect(() => {
    dbService.collection("curriculum").onSnapshot((snapshot) => {
      const imgUrlArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(imgUrlArray);
    });
  }, []);
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
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
      setNewImage(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onclearPhoto = () => setNewImage(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    let url = null;
    if (newImage) {
      const fileRef = storageService.ref().child(`partnerLogo/${name}.png`);
      const response = await fileRef.putString(newImage, "data_url");
      url = await response.ref.getDownloadURL();
    }
    await dbService.collection("curriculum").add({
      name,
      url,
    });
    setName("");
    onclearPhoto();
    alert("추가되었습니다.");
  };
  const onDelete = async (id, imgUrl) => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) {
      await dbService.collection("curriculum").doc(id).delete();
      if (imgUrl) {
        await storageService.refFromURL(imgUrl).delete();
      }
    }
  };
  return (
    <>
      <p className="adm-sectiontitle">커리큘럼</p>
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
        <p className="adm-editpartner-subtitle">커리큘럼 이미지 추가</p>
        <label htmlFor="name">커리큘럼 명칭</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="커리큘럼 명칭"
          autoComplete="off"
          required
        />
        <br />
        {newImage ? (
          <div className="adm-partner-logopreview">
            <img src={newImage} alt="profile" />
            <p onClick={onclearPhoto}>이미지 삭제</p>
          </div>
        ) : (
          <div>
            <label className="adm-partner-imgupload" htmlFor="adm-partner-logo">
              커리큘럼 이미지 업로드
            </label>
            <input
              id="adm-partner-logo"
              type="file"
              accept="image/*"
              onChange={onFileChange}
              required
            />
          </div>
        )}
        <br />
        <button className="adm-co-editbutton" type="submit">
          추가
        </button>
      </form>
      <p className="adm-editpartner-subtitle">현재 커리큘럼 이미지 목록</p>
      <div className="adm-partners-grid">
        {images.map((image) => (
          <div className="adm-partner-wrapper" key={image.name}>
            <p className="adm-partner-info">{image.name}</p>
            <img
              className="p5-cooperates__img"
              src={image.url ? image.url : null}
              alt="logo"
            />
            <p
              className="adm-partner-edititem"
              onClick={() => onDelete(image.id, image.url)}
            >
              삭제
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditCurriculum;
