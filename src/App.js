//библиотеки
import React, { useState } from "react";
import "./global.scss";
import { connect } from "react-redux";
import { useIntersectionObserver } from "@researchgate/react-intersection-observer";

//компоненты
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Developer from "./components/FrontEndDeveloper/Developer";
import OurCheerful from "./components/OurCheerful/OurCheerful";
import SubMenuModal from "./components/SubMenu/ModalSubMenu";
import Form from "./components/Form/Form";
import Notify from "./components/Notification/Notify";

function App({ isOpen, isLoad }) {
  // состояния для отслеживания того какой элемент попал
  // в поле intersection observer
  const [banner, setBanner] = useState("invisible");
  const [developer, setDeveloper] = useState("invisible");
  const [ourCheerful, setOurCheerful] = useState("invisible");
  const [form, setForm] = useState("invisible");

  //сетеры состояния, реагируют на entry
  const showBanner = (entry) => {
    setBanner(entry.isIntersecting ? "banner" : "invisible");
  };

  const showDeveloper = (entry) => {
    setDeveloper(entry.isIntersecting ? "developer" : "invisible");
  };

  const showOurCheerful = (entry) => {
    setOurCheerful(entry.isIntersecting ? "ourCheerful" : "invisible");
  };

  const showForm = (entry) => {
    setForm(entry.isIntersecting ? "form" : "invisible");
  };

  //якоря для intersection observer
  const [ref] = useIntersectionObserver(showBanner, { threshold: 0.2 });
  const [jef] = useIntersectionObserver(showDeveloper, { threshold: 0.2 });
  const [lef] = useIntersectionObserver(showOurCheerful, { threshold: 0.2 });
  const [hef] = useIntersectionObserver(showForm, { threshold: 0.1 });
  return (
    <>
      <Header
        active={
          banner === "banner"
            ? "banner"
            : developer === "developer"
            ? "developer"
            : ourCheerful === "ourCheerful"
            ? "ourCheerful"
            : form === "form"
            ? "form"
            : "non-active"
        }
      />
      {isOpen ? <SubMenuModal /> : ""}
      <main>
        <section ref={ref}>
          <Banner />
        </section>
        <section ref={jef}>
          <Developer />
        </section>
        <section ref={lef}>
          <OurCheerful />
        </section>
        <section ref={hef}>
          {isLoad === true && <Notify />}
          <Form />
        </section>
      </main>
    </>
  );
}

//isOpen - меню сбоку экрана, isLoad - модалка при успешном POST запросе
const mapStateToProps = (state) => ({
  isOpen: state.subMenu.open,
  isLoad: state.notification.load,
});

export default connect(mapStateToProps, null)(App);
