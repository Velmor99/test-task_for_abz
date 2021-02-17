import { createReducer } from "@reduxjs/toolkit";
import positionActions from "./position.actions";

const initialState = null;

export const positions = createReducer(initialState, {
  [positionActions.getPositionsSuccess]: (state, action) =>
    (state = action.payload),
});
