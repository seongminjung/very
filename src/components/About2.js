import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/about2.css";
import profile from "img/picture/profile.png";

const About2 = () => {
  const [president, setPresident] = useState([]);
  const [gen, setGen] = useState([]);
  useEffect(() => {
    dbService.collection("clubofficers").onSnapshot((snapshot) => {
      const pr_info = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPresident(pr_info[pr_info.length - 1]["president"]);
      setGen(pr_info[pr_info.length - 1]["id"]);
    });
  }, []);
  return (
    <div className="container">
      <div className="ab2-flex">
        <div className="ab2-left">
          <p className="ab2-title">
            열심히와 <span className="ab2-title__blue">꾸준히</span>는 다르다.
          </p>
          <div className="ab2-profile">
            <img src={profile} alt="profile" />
          </div>
          <div className="ab2-namecard">
            <p className="ab2-namecard__name">{president.name}</p>
            <p className="ab2-namecard__detail">VERY {gen}기 회장</p>
          </div>
        </div>
        <div className="ab2-right">
          <p className="ab2-greeting-top">&lt; 인 사 말 &gt;</p>
          <p className="ab2-greeting-bottom">
            안녕하십니까? VERY 36기 회장 김태윤입니다.
          </p>
          <p className="ab2-body">
            여러분은 둘 중 하나를 택한다면 목표를 향해 열심히 사는 사람이 되고
            싶으신가요?
            <br />
            아니면 꾸준히 목표를 향해 가는 사람이 되고 싶으신가요?
            <br />
            <br />
            자신의 목표를 향해 열심히 하는 사람들과 꾸준히 하는 사람들은 분명
            모두 보기 좋고
            <br />
            닮고 싶을 것입니다. 그러나 열심히와 꾸준히는 분명 다른 말입니다.
            물론 열심히 꾸준하게
            <br />
            하는 것이 가장 좋을 테지만 인생을 살면서 모든 일에 그러기란 분명
            무리입니다.
            <br />
            초반에 모든 에너지를 다 써버려 번아웃이 오는 것이 그 반증이겠죠.
            아무리 열심히
            <br />
            한다고 해도 꾸준하지 않으면 일이 잘 되기를 기대하기는 어렵습니다.
            <br />
            <br />
            모든 일은 마라톤과 같습니다.
            <br />
            어떤 일을 꾸준히 하기 위해서는 자신의 할당량을 아는 것이 중요하고
            그에
            <br />
            따른 페이스 관리가 가장 중요합니다. 여러분도 자신의 페이스를 알려고
            노력하면
            <br />
            분명 꾸준한 사람이 될 수 있을 것입니다.
          </p>
          <p className="ab2-closing">VERY 36기 회장 김태윤 올림</p>
        </div>
      </div>
    </div>
  );
};

export default About2;
