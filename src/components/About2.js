import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/about2.css";

const About2 = () => {
  const [president, setPresident] = useState([]);
  const [gen, setGen] = useState([]);
  const [phrase, setPhrase] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    dbService.collection("clubofficers").onSnapshot((snapshot) => {
      const row = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      row[0]["officers"].forEach((element) => {
        if (element.position === "회장") {
          setPresident(element);
        }
      });
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
  useEffect(() => {
    dbService.collection("message").onSnapshot((snapshot) => {
      const message = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setPhrase(message[0].phrase);
      setTitle(message[0].title);
      setBody(message[0].body);
    });
  }, []);
  return (
    <div className="container">
      <div className="ab2-flex">
        <div className="ab2-left">
          <p className="ab2-title">{phrase}</p>
          <div className="ab2-profile">
            <img src={president.url} alt="profile" />
          </div>
          <div className="ab2-namecard">
            <p className="ab2-namecard__name">{president.name}</p>
            <p className="ab2-namecard__detail">VERY {gen}기 회장</p>
          </div>
        </div>
        <div className="ab2-right">
          <p className="ab2-greeting-top">&lt; 인 사 말 &gt;</p>
          <p className="ab2-greeting-bottom">{title}</p>
          <textarea className="ab2-body" defaultValue={body}></textarea>
          <p className="ab2-closing">
            VERY {gen}기 회장 {president.name} 올림
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
