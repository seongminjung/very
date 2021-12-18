import React from "react";
import "css/about2.css";
import profile from "img/picture/profile.png";

const About2 = () => {
  return (
    <div className="container ab2-relative">
      <div className="ab2-text">
        <p className="ab2-title">회장 인사말</p>
        <p className="ab2-subtitle">
          목표를 향하여, <span class="ab2-subtitle__blue">최선</span>을 다하라.
        </p>
        <p className="ab2-greeting">
          안녕하십니까? VERY 34기 회장 임채현입니다.
        </p>
        <p className="ab2-body">
          VERY 웹사이트를 찾아주신 여러분을 진심으로 환영합니다. VERY는 1997년
          벤처창업연구회 동아리로로 발족한 이래 같은 장소에서 회원들께
          Knowledge, Experience, Network라는 세 가지 가치를 제공하고 있습니다.
          <br />
          <br />
          33기부터 시작된 임기가 마냥 순탄하지만은 않았습니다. 코로나 시국
          속에서 준비했던 많은 활동들은 빛을 보지 못했고, 지금껏 이어오던 여러
          관계가 끊기는 등 수많은 악조건이 겹치는 와중에 VERY의 명맥을
          이어나가야 했습니다. 하지만, 주어진 환경에서 최선을 다하자는 신념으로
          저는 아래와 같이 다짐합니다.
          <br />
          <br />
          VERY는 연세대학교의 가장 뿌리 깊은 창업동아리로써 주어진 명예와 의무에
          충실하며, 수많은 예비 창업인을 돕는 창업 인큐베이터(Incubator)로
          거듭날 것입니다. 저희는 이로써 고작 '동아리'에 만족하지 않고 실제
          기업들과 연계하여 대학생 창업 생태계, 나아가 우리 사회 전반의 발전에
          기여하는 ‘선두 주자’가 될 것입니다. VERY을 응원해주시는 모든 협력
          업체, 동학들, 동문 선배님들, 송홍엽 지도교수님, 그리고 기타 모든
          이해관계자들에게 감사 인사를 올립니다.
        </p>
        <p className="ab2-closing">VERY 34기 회장 임채현 올림</p>
      </div>
      <div className="ab2-namecard">
        <p className="ab2-namecard__name">임채현</p>
        <p className="ab2-namecard__detail">VERY 34기 회장</p>
      </div>
      <div className="ab2-profile">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default About2;
