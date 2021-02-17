import React from "react";
import { connect } from "react-redux";
import "./notify.scss";
import notifyAction from "../../redux/postProfile/postProfile.actions";

function Notify({ notification, onClose }) {
  return (
    <>
      <div className="notify__overlay"></div>
      <div className="notify__message">
        <h2 className="notify__title">
          {notification.split(" ").slice(0, 1).join(" ")}
        </h2>
        <p className="notify__text">
          {notification.split(" ").slice(1).join(" ")}
        </p>
        <button onClick={onClose} className="notify__button">
          Ok
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  notification: state.notification.message,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(notifyAction.closeNotify()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notify);
