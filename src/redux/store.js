import { configureStore } from "@reduxjs/toolkit";
import { subMenuReducer } from "./submenu/submenu.reducer";
import { users } from "./getUsers/users.reducer";
import { positions } from "./getPositions/position.reducers";
import profileReducers from "./postProfile/postProfile.reducer";

const store = configureStore({
  reducer: {
    subMenu: subMenuReducer,
    dataOfUsers: users,
    positions: positions,
    notification: profileReducers.notification,
    token: profileReducers.token,
  },
});

export default store;
