import { createReducer } from "@reduxjs/toolkit";
import profileActions from "./postProfile.actions";

const initialToken = null;
const notify = {
  load: false,
  message: "",
};

const token = createReducer(initialToken, {
  [profileActions.getTokenSuccess]: (state, action) => (state = action.payload),
});

const notification = createReducer(notify, {
  [profileActions.postProfileSuccess]: (state, _) =>
    (state = {
      load: true,
      message: "Congratulations You have successfully passed the registration",
    }),
  [profileActions.closeNotify]: (state, _) => (state = notify),
});

export default {
  token,
  notification,
};
