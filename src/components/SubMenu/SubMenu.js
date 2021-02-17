import React from "react";
import "./subMenu.scss";
import logo from "../../img/logo.svg";

function SubMenu() {
  return (
    <div className="subMenu">
      <div className="subMenu__logo">
        <img className="subMenu__logo-image" src={logo} alt="logo"></img>
      </div>
      <ul className="subMenu__firstList">
        <li className="subMenu__text text1">About me</li>
        <li className="subMenu__text text2">Relationships</li>
        <li className="subMenu__text text3">Users</li>
        <li className="subMenu__text text4">Sign up</li>
        <li className="subMenu__text text5">Terms and Conditions</li>
      </ul>
      <ul className="subMenu__secondList">
        <li className="subMenu__text text1">How it works</li>
        <li className="subMenu__text text2">Partnership</li>
        <li className="subMenu__text text3">Help</li>
        <li className="subMenu__text text4">Leave testimonial</li>
        <li className="subMenu__text text5">Contact us</li>
      </ul>
      <ul className="subMenu__thirdList">
        <li className="subMenu__text text1">Articles</li>
        <li className="subMenu__text text2">Our news</li>
        <li className="subMenu__text text3">Testimonials</li>
        <li className="subMenu__text text4">Licenses</li>
        <li className="subMenu__text text5">Pricy Policy</li>
      </ul>
    </div>
  );
}

export default SubMenu;
