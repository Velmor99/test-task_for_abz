import React from "react";
import developer from "../../img/man-laptop-v1.svg";
import "./developer.scss";

function Developer() {
  const pageHeight = document.documentElement.scrollHeight;
  const handleClick = () => {
    window.scrollTo({
      top: pageHeight - 900,
      behavior: "smooth",
    });
  };
  return (
    <div className="developer__container">
      <div className="developer__grid">
        <h2 className="developer__mainTitle">Let's get acquainted</h2>
        <img
          className="developer__image"
          src={developer}
          alt="cool front-end developer"
        ></img>
        <h2 className="developer__title">I am cool frontend developer</h2>
        <p className="developer__text first">
          We will evaluate how clean your approach to writing CSS and Javascript
          code is. You can use any CSS and Javascript 3rd party libraries
          without any restriction
        </p>
        <p className="developer__text second">
          If 3rd party css/javascript libraries are added to the project via
          bower/npm/yarn you will get bonus points. If you use any task runner
          (gulp/webpack) you will get bonus points as well. Slice service
          directory page P​SD mockup​ into HTML5/CSS3.
        </p>
        <div className="developer__button-block">
          <button onClick={handleClick} className="developer__button">
            Sing up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Developer;
