import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import AwardTile from "components/AwardTile";
import "css/admin.css";

const EditAward = ({ userObj }) => {
  const [awards, setAwards] = useState([]);
  const [contestname, setContestname] = useState("");
  const [teamname, setTeamname] = useState("");
  const [result, setResult] = useState("");
  const [host, setHost] = useState("");
  const [gen, setGen] = useState("");
  useEffect(() => {
    dbService.collection("awards").onSnapshot((snapshot) => {
      const awardArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setAwards(awardArray);
    });
  }, []);
  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "contestname") {
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
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!userObj) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    await dbService.collection("awards").add({
      contestname,
      result,
      teamname,
      host,
      createdAt: Date.now(),
      gen,
    });
    setContestname("");
    setResult("");
    setTeamname("");
    setHost("");
    setGen("");
    alert("추가되었습니다.");
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
            <AwardTile award={award} key={award.createdAt} />
          ))}
        </div>
        <p className="adm-editpartner-subtitle">공모전 추가</p>
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
        <input type="submit" value="추가" />
      </form>
    </>
  );
};

export default EditAward;
