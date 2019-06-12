import { GET_MOVIE_TRAILERS } from "./types";

const getMovieTrailers = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passMovieTrailers(data)))
      .catch(error => console.log(error));
  };
};

const passMovieTrailers = payload => ({
  type: GET_MOVIE_TRAILERS,
  payload
});

export default getMovieTrailers;
