import React from "react";
import logo from "../../img/logo.svg";
import menu from "../../img/menu icon.svg";
import { connect } from "react-redux";
import submenuActions from "../../redux/submenu/submenu.action";
import "./header.scss";

function Header({ handleOpen, active }) {
  //обработчики событий на скролл страницы к нужному блоку
  const pageHeight = document.documentElement.scrollHeight;
  const clickOnForm = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: pageHeight - 900,
      behavior: "smooth",
    });
  };
  const clickOnUsers = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 1300,
      behavior: "smooth",
    });
  };
  const clickOnRequirements = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  const clickOnRelationship = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header className="header">
      <div className="container">
        <nav className="header__grid">
          <img className="header__logo" src={logo} alt="logo"></img>
          <button className="header__button" onClick={handleOpen}>
            <img className="header__menu" src={menu}></img>
          </button>
          <ul className="header__links">
            <li className="header__link">
              <a href="#" className="header__text">
                About me
              </a>
            </li>
            <li className="header__link">
              <a
                onClick={clickOnRelationship}
                href="#"
                className={
                  active === "banner" ? "header__text-active" : "header__text"
                }
              >
                Relationships
              </a>
            </li>
            <li className="header__link">
              <a
                onClick={clickOnRequirements}
                href="#"
                className={
                  active === "developer"
                    ? "header__text-active"
                    : "header__text"
                }
              >
                Requirements
              </a>
            </li>
            <li className="header__link">
              <a
                onClick={clickOnUsers}
                href="#"
                className={
                  active === "ourCheerful"
                    ? "header__text-active"
                    : "header__text"
                }
              >
                Users
              </a>
            </li>
            <li className="header__link">
              <a
                onClick={clickOnForm}
                href="#"
                className={
                  active === "form" ? "header__text-active" : "header__text"
                }
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleOpen: () => dispatch(submenuActions.openSubMenu()),
});

export default connect(null, mapDispatchToProps)(Header);
