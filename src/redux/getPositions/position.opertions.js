import axios from "axios";
import positionActions from "./position.actions";

const getPositions = () => (dispatch, getState) => {
  dispatch(positionActions.getPositionsRequest());
  const url =
    "https://frontend-test-assignment-api.abz.agency/api/v1/positions";
  axios
    .get(url)
    .then((response) => {
      dispatch(positionActions.getPositionsSuccess(response.data.positions));
    })
    .catch((error) => console.log(error.message));
};

export default {
  getPositions,
};
