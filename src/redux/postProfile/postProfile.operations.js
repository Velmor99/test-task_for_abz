import axios from "axios";
import profileActions from "./postProfile.actions";

//операция на получение токена
const getToken = () => (dispatch, getState) => {
  dispatch(profileActions.getTokenRequest());
  axios
    .get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
    .then((response) => {
      dispatch(profileActions.getTokenSuccess(response.data.token));
    })
    .catch((err) => console.log(err));
};

//операция на отправку профиля с данными и фотографией
const postProfile = (inputData, fileData) => (dispatch, getState) => {
  const token = getState().token;
  const formData = new FormData();
  formData.append("photo", fileData);
  formData.append("name", inputData.name);
  formData.append("email", inputData.email);
  formData.append("position_id", inputData.position_id);
  formData.append("phone", inputData.phone);

  console.log("inputData: ", inputData);
  console.log("fileData: ", fileData);

  axios
    .post(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      formData,
      {
        headers: {
          token: token,
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then(() => {
      dispatch(profileActions.postProfileSuccess());
    })
    .catch((err) => dispatch(profileActions.postProfileError()));
};

export default {
  postProfile,
  getToken,
};
