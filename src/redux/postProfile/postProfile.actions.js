import { createAction, createStore } from "@reduxjs/toolkit";

const getTokenRequest = createAction("token/getTokenRequest");
const getTokenSuccess = createAction("token/getTokenSuccess");
const getTokenError = createAction("token/getTokenError");

const postProfileRequest = createAction("profile/postProfileRequest");
const postProfileSuccess = createAction("profile/postProfileSuccess");
const postProfileError = createAction("profile/postProfileError");

const closeNotify = createAction("closeModal");

export default {
  postProfileRequest,
  postProfileSuccess,
  postProfileError,
  getTokenRequest,
  getTokenSuccess,
  getTokenError,
  closeNotify,
};
