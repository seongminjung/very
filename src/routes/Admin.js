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
      <Link className="adm-flex" to="/">
        <img src={logo} alt="logo" />
        <h1 className="adm-title">Admin Page</h1>
      </Link>
      {userObj && <p onClick={onLogOutClick}>Logout</p>}
      {userObj ? (
        <div>
          <EditInfo userObj={userObj} />
          <br />
          <EditAward userObj={userObj} />
          <br />
          <EditClubofficers userObj={userObj} />
          <br />
          <EditPartner userObj={userObj} />
          <br />
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Admin;
