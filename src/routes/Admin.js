import React from "react";
import { Link } from "react-router-dom";
import { authService } from "fb_info";
import LoginForm from "components/LoginForm";
import EditInfo from "components/EditInfo";
import EditAward from "components/EditAward";
import EditClubofficers from "components/EditClubofficers";
import EditPartner from "components/EditPartner";
import "css/admin.css";
import logo from "img/logo/logo-row-gray.png";

const Admin = ({ userObj }) => {
  const onLogOutClick = () => {
    authService.signOut();
  };
  return (
    <>
      <div className="container">
        <div className="adm-header">
          <Link className="adm-flex" to="/">
            <img src={logo} alt="logo" />
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
          <div>
            <EditInfo userObj={userObj} />
            <br />
            <hr />
            <br />
            <EditAward userObj={userObj} />
            <br />
            <hr />
            <EditClubofficers userObj={userObj} />
            <hr />
            <EditPartner userObj={userObj} />
            <hr />
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
    </>
  );
};

export default Admin;
