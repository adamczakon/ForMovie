import { GET_MOVIES_NOW_PLAYING } from "./types";

const getMoviesNowPlaying = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passMoviesNowPlaying(data)))
      .catch(error => console.log(error));
  };
};

const passMoviesNowPlaying = payload => ({
  type: GET_MOVIES_NOW_PLAYING,
  payload
});

export default getMoviesNowPlaying;
