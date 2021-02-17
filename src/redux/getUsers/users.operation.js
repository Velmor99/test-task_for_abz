import axios from "axios";
import usersActions from "./users.action";

//операция на получение массива юзеров
const getUsers = (page, count) => (dispatch, getState) => {
  dispatch(usersActions.getUsersRequest());
  const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`;
  axios
    .get(url)
    .then((response) => {
      dispatch(usersActions.getUsersSuccess(response.data));
    })
    .catch((error) => console.log(error.message));
};

export default {
  getUsers,
};
