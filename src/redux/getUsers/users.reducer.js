import { createReducer } from "@reduxjs/toolkit";
import usersAction from "./users.action";
import postProfileAction from "../postProfile/postProfile.actions";

const initialState = {
  users: [],
  page: 0,
  totalPages: 0,
};

export const users = createReducer(initialState, {
  [usersAction.getUsersSuccess]: (state, action) => {
    (state.users = [...state.users, ...action.payload.users]),
      (state.page = action.payload.page),
      (state.totalPages = action.payload.total_pages);
  },
  [postProfileAction.postProfileSuccess]: (state, _) => (state = initialState),
});
