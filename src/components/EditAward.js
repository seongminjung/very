import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fb_info";
import AwardTile from "components/AwardTile";
import "css/admin.css";

const EditAward = ({ userObj }) => {
  const [awards, setAwards] = useState([]);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [contestname, setContestname] = useState("");
  const [teamname, setTeamname] = useState("");
  const [result, setResult] = useState("");
  const [host, setHost] = useState("");
  const [gen, setGen] = useState("");
  const [teamImg, setTeamImg] = useState(null);
  useEffect(() => {
    dbService.collection("awards").onSnapshot((snapshot) => {
      const awardArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAwards(awardArray);
    });
  }, []);
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "year") {
      setYear(value);
    } else if (name === "month") {
      setMonth(value);
    } else if (name === "contestname") {
      setContestname(value);
    } else if (name === "result") {
      setResult(value);
    } else if (name === "teamname") {
      setTeamname(value);
    } else if (name === "host") {
      setHost(value);
    } else if (name === "gen") {
      setGen(value);
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
      setTeamImg(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onclearPhoto = () => setTeamImg(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    let imgUrl = null;
    const createdAt = Date.now();
    if (teamImg) {
      const fileRef = storageService.ref().child(`awards/${createdAt}.png`);
      const response = await fileRef.putString(teamImg, "data_url");
      imgUrl = await response.ref.getDownloadURL();
    }
    await dbService.collection("awards").doc(String(createdAt)).set({
      year,
      month,
      contestname,
      result,
      teamname,
      host,
      createdAt,
      gen,
      imgUrl,
    });
    setYear("");
    setMonth("");
    setContestname("");
    setResult("");
    setTeamname("");
    setHost("");
    setGen("");
    onclearPhoto();
    alert("추가되었습니다.");
  };
  const onDelete = async (id, imgUrl) => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) {
      await dbService.collection("awards").doc(id).delete();
      if (imgUrl) {
        await storageService.refFromURL(imgUrl).delete();
      }
    }
  };
  return (
    <>
      <form className="adm-textform" onSubmit={onSubmit}>
        <p className="adm-sectiontitle">공모전</p>
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
        <p className="adm-editpartner-subtitle">현재 공모전 목록</p>
        <div className="adm-awards-grid">
          {awards.map((award) => (
            <div className="adm-awards-itemwrapper" key={award.createdAt}>
              <AwardTile award={award} />
              <p
                className="adm-awards-edititem"
                onClick={() => onDelete(award.id, award.imgUrl)}
              >
                삭제
              </p>
            </div>
          ))}
        </div>
        <p className="adm-editpartner-subtitle">공모전 추가</p>
        <label htmlFor="year">일시</label>
        <input
          type="number"
          id="year"
          name="year"
          value={year}
          onChange={onChange}
          placeholder="년"
          autoComplete="off"
          required
          max="9999"
          min="0"
        />
        <input
          type="number"
          id="month"
          name="month"
          value={month}
          onChange={onChange}
          placeholder="월"
          autoComplete="off"
          required
          max="12"
          min="1"
        />
        <br />
        <label htmlFor="contestname">대회명</label>
        <input
          type="text"
          id="contestname"
          name="contestname"
          value={contestname}
          onChange={onChange}
          placeholder="대회명"
          autoComplete="off"
          required
        />
        <br />
        <label htmlFor="teamname">팀명</label>
        <input
          type="text"
          id="teamname"
          name="teamname"
          value={teamname}
          onChange={onChange}
          placeholder="팀명"
          autoComplete="off"
          required
        />
        <br />
        <label htmlFor="result">상격 & 결과</label>
        <input
          type="text"
          id="result"
          name="result"
          value={result}
          onChange={onChange}
          placeholder="상격 & 결과"
          autoComplete="off"
          required
        />
        <br />
        <label htmlFor="host">주최</label>
        <input
          type="text"
          id="host"
          name="host"
          value={host}
          onChange={onChange}
          placeholder="주최"
          autoComplete="off"
          required
        />
        <br />
        <label htmlFor="gen">기수</label>
        <input
          type="number"
          id="gen"
          name="gen"
          value={gen}
          onChange={onChange}
          placeholder="기수"
          autoComplete="off"
          required
        />
        <br />
        {teamImg ? (
          <div className="adm-partner-logopreview">
            <img src={teamImg} alt="profile" />
            <p onClick={onclearPhoto}>이미지 삭제</p>
          </div>
        ) : (
          <div>
            <label className="adm-partner-imgupload" htmlFor="adm-partner-logo">
              팀 사진 업로드
            </label>
            <input
              id="adm-partner-logo"
              type="file"
              accept="image/*"
              onChange={onFileChange}
            />
          </div>
        )}
        <input type="submit" value="추가" />
      </form>
    </>
  );
};

export default EditAward;
