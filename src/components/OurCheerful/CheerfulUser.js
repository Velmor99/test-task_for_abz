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
        <p className="item__name item__text">
          {name.split(" ").length > 1
            ? name
            : name.split("").includes("-", " ")
            ? name
            : name.length > 40
            ? `${name.slice(0, 10)}-${name.slice(10, 20)}-${name.slice(20)}`
            : name}
        </p>
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
