import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "fb_info";
import LoginForm from "components/LoginForm";
import EditInfo from "components/EditInfo";
import EditAward from "components/EditAward";
import EditClubofficers from "components/EditClubofficers";
import EditPartner from "components/EditPartner";
import EditMessage from "components/EditMessage";
import EditCurriculum from "components/EditCurriculum";
import Footer from "components/Footer";
import "css/admin.css";
import logo from "img/logo/logo-row-gray.png";

const Admin = ({ userObj }) => {
  const [tab, setTab] = useState("info");
  const onLogOutClick = () => {
    authService.signOut();
  };
  const changeTab = (tab) => setTab(tab);
  return (
    <>
      <div className="container">
        <div className="adm-header">
          <Link className="adm-flex" to="/">
            <img src={logo} alt="logo" width="200px" />
            <h1 className="adm-title">Admin Page</h1>
          </Link>
          {userObj && (
            <div>
              <p className="adm-logout" onClick={onLogOutClick}>
                Logout
              </p>
            </div>
          )}
        </div>
        {userObj ? (
          <div className="admin-flex">
            <div className="admin-left">
              <p
                onClick={() => changeTab("info")}
                className={tab === "info" ? "active" : "nonactive"}
              >
                기본 정보
              </p>
              <p
                onClick={() => changeTab("award")}
                className={tab === "award" ? "active" : "nonactive"}
              >
                공모전 수상 내역
              </p>
              <p
                onClick={() => changeTab("curriculum")}
                className={tab === "curriculum" ? "active" : "nonactive"}
              >
                커리큘럼
              </p>
              <p
                onClick={() => changeTab("message")}
                className={tab === "message" ? "active" : "nonactive"}
              >
                회장 인사말
              </p>
              <p
                onClick={() => changeTab("clubofficers")}
                className={tab === "clubofficers" ? "active" : "nonactive"}
              >
                임원진
              </p>
              <p
                onClick={() => changeTab("partner")}
                className={tab === "partner" ? "active" : "nonactive"}
              >
                협력 기업
              </p>
            </div>
            <div className="admin-right">
              <hr />
              {tab === "info" && <EditInfo userObj={userObj} />}
              {tab === "award" && <EditAward userObj={userObj} />}
              {tab === "curriculum" && <EditCurriculum userObj={userObj} />}
              {tab === "message" && <EditMessage userObj={userObj} />}
              {tab === "clubofficers" && <EditClubofficers userObj={userObj} />}
              {tab === "partner" && <EditPartner userObj={userObj} />}
            </div>
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Admin;
