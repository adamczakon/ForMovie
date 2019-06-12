import { GET_MOVIES_NOW_PLAYING } from "../actions/types";

const initialState = {
  results: []
};

const getMoviesNowPlaying = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_NOW_PLAYING:
      return { ...action.payload };
    default:
      return state;
  }
};

export default getMoviesNowPlaying;
