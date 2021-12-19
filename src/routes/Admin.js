import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService, dbService } from "fb_info";
import LoginForm from "components/LoginForm";
import AddInfo from "components/AddInfo";
import AddAward from "components/AddAward";
import AddCompany from "components/AddCompany";
import AddPartner from "components/AddPartner";
import "css/admin.css";
import logo from "img/logo/logo-row-gray.png";

const Admin = ({ userObj }) => {
  const onLogOutClick = () => {
    authService.signOut();
  };
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {userObj ? (
        <div>
          <AddInfo userObj={userObj} />
          <br />
          <AddAward userObj={userObj} />
          <br />
          <AddCompany userObj={userObj} />
          <br />
          <AddPartner userObj={userObj} />
          <br />
          <button onClick={onLogOutClick}>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Admin;
