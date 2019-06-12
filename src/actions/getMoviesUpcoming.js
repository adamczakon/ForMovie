import { GET_MOVIES_UPCOMING } from "./types";

const getMoviesUpcoming = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passMoviesUpcoming(data)))
      .catch(error => console.log(error));
  };
};

const passMoviesUpcoming = payload => ({
  type: GET_MOVIES_UPCOMING,
  payload
});

export default getMoviesUpcoming;
