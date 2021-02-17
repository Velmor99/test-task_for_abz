import React from "react";
import defaultImage from "../../img/photo-cover.png";
import "./oneUser.scss";

function CheerfulUser({ img, name, profile, number, email }) {
  return (
    <>
      <img
        className="item__image"
        src={img ? img : defaultImage}
        alt="profile photo"
      ></img>
      <div className="item__text-block">
        <p className="item__name item__text">{name}</p>
        <p className="item__profile item__text">{profile}</p>
        <p
          title={email.length > 20 ? email : ""}
          className="item__email item__text"
        >
          {email.length > 20 ? `${email.slice(0, 20)}...` : email}
        </p>
        <p className="item__number item__text">{number}</p>
      </div>
    </>
  );
}

export default CheerfulUser;
