import { createAction } from "@reduxjs/toolkit";

const getPositionsRequest = createAction("position/getPositionRequest");
const getPositionsSuccess = createAction("position/getPositionSuccess");
const getPositionsError = createAction("position/getPositionError");

export default {
  getPositionsRequest,
  getPositionsSuccess,
  getPositionsError,
};
