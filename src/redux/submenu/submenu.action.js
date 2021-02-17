import { createAction } from "@reduxjs/toolkit";

const openSubMenu = createAction("submenu/open");
const closeSubMenu = createAction("submenu/close");

export default {
  openSubMenu,
  closeSubMenu,
};
