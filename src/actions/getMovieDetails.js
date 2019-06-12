import { GET_MOVIE_DETAILS } from "./types";

const getMovieDetails = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passMovieDetails(data)))
      .catch(error => console.log(error));
  };
};

const passMovieDetails = payload => ({
  type: GET_MOVIE_DETAILS,
  payload
});

export default getMovieDetails;
