import { GET_MOVIE_CREDITS } from "./types";

const getMovieCredits = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passMovieCredits(data)))
      .catch(error => console.log(error));
  };
};

const passMovieCredits = payload => ({
  type: GET_MOVIE_CREDITS,
  payload
});

export default getMovieCredits;
