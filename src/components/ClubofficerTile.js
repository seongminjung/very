import React from "react";

const ClubofficerTile = ({ gen, pos, name, contact, email, profileImg }) => {
  return (
    <div className="co2-officer">
      <img className="co2-officer__profile" src={profileImg} alt="profile" />
      <p className="co2-officer__name">
        {gen}기 {pos} <span>{name}</span>
      </p>
      <p className="co2-officer__detail">
        contact: {contact}
        <br />
        e-mail: {email}
      </p>
    </div>
  );
};

export default ClubofficerTile;
