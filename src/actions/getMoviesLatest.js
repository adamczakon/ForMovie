import { GET_MOVIES_LATEST } from "./types";

const getMoviesLatest = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passMoviesLatest(data)))
      .catch(error => console.log(error));
  };
};

const passMoviesLatest = payload => ({
  type: GET_MOVIES_LATEST,
  payload
});

export default getMoviesLatest;
