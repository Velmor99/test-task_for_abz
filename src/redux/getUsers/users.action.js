import { createAction } from "@reduxjs/toolkit";

const getUsersRequest = createAction("users/getUsersRequest");
const getUsersSuccess = createAction("users/getUsersSuccess");
const getUsersError = createAction("user/detUsersError");

export default {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
};
