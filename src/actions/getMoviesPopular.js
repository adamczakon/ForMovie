import { GET_MOVIES_POPULAR } from "./types";

const getMoviesPopular = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passMoviesPopular(data)))
      .catch(error => console.log(error));
  };
};

const passMoviesPopular = payload => ({
  type: GET_MOVIES_POPULAR,
  payload
});

export default getMoviesPopular;
