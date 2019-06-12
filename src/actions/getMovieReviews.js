import { GET_MOVIE_REVIEWS } from "./types";

const getMovieReviews = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passMovieReviews(data)))
      .catch(error => console.log(error));
  };
};

const passMovieReviews = payload => ({
  type: GET_MOVIE_REVIEWS,
  payload
});

export default getMovieReviews;
