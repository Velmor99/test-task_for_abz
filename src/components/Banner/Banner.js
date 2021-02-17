import React from "react";
//стили
import "./banner.scss";

function Banner() {
  //задает координаты для точной прокрутки к форме вне зависимости от длинны страницы
  const pageHeight = document.documentElement.scrollHeight;

  //прокручиват страницу к форме
  const handleClick = () => {
    window.scrollTo({
      top: pageHeight - 900,
      behavior: "smooth",
    });
  };
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__grid">
          <h2 className="banner__title">
            TEST ASSIGNMENT <br></br>FOR FRONTEND <br></br> DEVELOPER POSITION
          </h2>
          <p className="banner__text">
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.
          </p>
          <p className="banner__tabletText">
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. Please be patient, we
            consider and respond to every application that meets minimum
            requirements. We look forward to your submission. Good luck! The
            photo has to scale in the banner area on the different screens
          </p>
          <div className="banner__button-block">
            <button onClick={handleClick} className="banner__button">
              Sing up now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
