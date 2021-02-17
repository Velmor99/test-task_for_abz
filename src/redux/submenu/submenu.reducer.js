import { createReducer } from "@reduxjs/toolkit";
import submenuActions from "./submenu.action";

const initialState = { open: false };

export const subMenuReducer = createReducer(initialState, {
  [submenuActions.openSubMenu]: (state, _) => (state = { open: true }),
  [submenuActions.closeSubMenu]: (state, _) => (state = { open: false }),
});
