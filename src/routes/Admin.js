import React from "react";
import { Link } from "react-router-dom";
import { authService } from "fb_info";
import LoginForm from "components/LoginForm";
import AddInfo from "components/AddInfo";
import AddAward from "components/AddAward";
import AddClubmembers from "components/AddClubmembers";
import AddPartner from "components/AddPartner";
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
          <AddInfo userObj={userObj} />
          <br />
          <AddAward userObj={userObj} />
          <br />
          <AddClubmembers userObj={userObj} />
          <br />
          <AddPartner userObj={userObj} />
          <br />
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Admin;
