//библиотеки
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//стили
import "./form.scss";
//операции и экшены
import positionOperations from "../../redux/getPositions/position.opertions";
import postProfileOperation from "../../redux/postProfile/postProfile.operations";
import getUsers from "../../redux/getUsers/users.operation";

function SiginUpForm({
  //методы из редакса и операций
  getPositions,
  positions,
  postProfile,
  getToken,
  getUsers,
}) {
  //при первом рендере делает запрос на актуальные позиции а так же на токен
  useEffect(() => {
    getPositions();
    getToken();
  }, []);

  //ссылка на DOM элемент - инпут файл
  const fileInput = useRef(null);

  //берет у инпута нужный файл
  const handleFileUpload = () => {
    return fileInput.current.files[0];
  };

  return (
    <div className="form__continer">
      <div className="form__grid-title">
        <h2 className="form__title">Register to get a work</h2>
        <p className="form__text">
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>
      </div>
      <Formik
        //начальные значения
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          position: 1,
        }}
        //валидация данных
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Too few characters")
            .max(60, "Too many characters")
            .required("Requred field"),
          email: Yup.string()
            .email("Email is not valid")
            .min(2, "Too few characters")
            .max(100, "Too many characters")
            .required("Requred field"),
          phoneNumber: Yup.string()
            .required("Requred field")
            .matches(
              /^[\+]{0,1}380([0-9]{9})$/,
              "Phone number must much the following +380... and have 12 numbes"
            ),
          position: Yup.number()
            .integer()
            .positive()
            .moreThan(0, "incorrect value")
            .lessThan(5, "incorrect value"),
        })}
        //событие отправки данных а операцию запроса
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            postProfile(
              {
                name: values.name,
                email: values.email,
                phone: values.phoneNumber,
                position_id: Number(values.position),
              },
              handleFileUpload()
            );

            //обновление данных после POST запроса
            setTimeout(() => {
              getUsers(1, 6);
            }, 150);
            resetForm();
          }, 400);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="form__form">
            <div className="form__grid-input">
              <label className="form__yourName">
                <span className="form__name">Name</span>
                <br />
                <Field
                  className={[
                    "form__input-text",
                    touched.name && errors.name ? "form__input-text-error" : "",
                  ].join(" ")}
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
                <div className="form__error">
                  <ErrorMessage
                    className="form__error-text"
                    name="name"
                    component={"div"}
                  />
                </div>
              </label>
              <label className="form__yourEmail">
                <span className="form__name">Email</span>
                <br />
                <Field
                  className={[
                    "form__input-text",
                    touched.email && errors.email
                      ? "form__input-text-error"
                      : "",
                  ].join(" ")}
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
                <div className="form__error">
                  <ErrorMessage
                    className="form__error-text"
                    name="email"
                    component={"div"}
                  />
                </div>
              </label>
              <label className="form__yourNumber">
                <span className="form__name">Phone number</span>
                <br />
                <Field
                  className={[
                    "form__input-text",
                    touched.phoneNumber && errors.phoneNumber
                      ? "form__input-text-error"
                      : "",
                  ].join(" ")}
                  type="text"
                  name="phoneNumber"
                  placeholder="+380 XX XXX XX XX"
                />
                <div className="form__error">
                  <ErrorMessage
                    className="form__error-text"
                    name="phoneNumber"
                    component={"div"}
                  />
                </div>
              </label>
            </div>
            <div className="form__grid-radio">
              <p className="form__yourPosition">Select your position</p>
              <label className="form__firstPosition">
                <Field
                  className="form__radio"
                  type="radio"
                  name={"position"}
                  value={positions ? positions[0].id : ""}
                  checked={
                    positions
                      ? Number(values.position) === positions[0].id
                        ? true
                        : false
                      : ""
                  }
                ></Field>
                <span className="form__radio-name">
                  {positions ? positions[0].name : ""}
                </span>
              </label>
              <label className="form__secondPosition">
                <Field
                  className="form__radio"
                  type="radio"
                  name={"position"}
                  value={positions ? positions[1].id : ""}
                  checked={
                    positions
                      ? Number(values.position) === positions[1].id
                        ? true
                        : false
                      : ""
                  }
                ></Field>
                <span className="form__radio-name">
                  {positions ? positions[1].name : ""}
                </span>
              </label>
              <label className="form__thirdPosition">
                <Field
                  className="form__radio"
                  type="radio"
                  name={"position"}
                  value={positions ? positions[2].id : ""}
                  checked={
                    positions
                      ? Number(values.position) === positions[2].id
                        ? true
                        : false
                      : ""
                  }
                ></Field>
                <span className="form__radio-name">
                  {positions ? positions[2].name : ""}
                </span>
              </label>
              <label className="form__fourthPosition">
                <Field
                  className="form__radio"
                  type="radio"
                  name={"position"}
                  value={positions ? positions[3].id : ""}
                  checked={
                    positions
                      ? Number(values.position) === positions[3].id
                        ? true
                        : false
                      : ""
                  }
                ></Field>
                <span className="form__radio-name">
                  {positions ? positions[3].name : ""}
                </span>
              </label>
            </div>
            <div className="form__grid-file">
              <p className="form__yourPhoto">Photo</p>
              <label className="form__fileLabel">
                <input
                  className="form__uploadFile"
                  type="file"
                  ref={fileInput}
                  accept="image/jpg"
                ></input>
                <div className="form__upload-button-block">
                  <div className="form__upload-form">
                    <span className="form__upload-text-input">
                      {fileInput.length > 0
                        ? fileInput.current.files[0].name
                        : "Upload your photo"}
                    </span>
                  </div>
                  <div className="form__button-upload">
                    <span className="form__upload-text-button">Browse</span>
                  </div>
                </div>
              </label>
              <div className="form__button-block">
                <button
                  className="form__button"
                  type="submit"
                  disabled={
                    touched.name &&
                    touched.email &&
                    touched.phoneNumber &&
                    errors.name === undefined &&
                    errors.email === undefined &&
                    errors.phoneNumber === undefined &&
                    values.position !== ""
                      ? false
                      : true
                  }
                >
                  Sing up now
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const mapDispatchToProps = {
  getPositions: positionOperations.getPositions,
  postProfile: postProfileOperation.postProfile,
  getToken: postProfileOperation.getToken,
  getUsers: getUsers.getUsers,
};

const mapStateToProps = (state) => ({
  positions: state.positions,
});

export default connect(mapStateToProps, mapDispatchToProps)(SiginUpForm);
