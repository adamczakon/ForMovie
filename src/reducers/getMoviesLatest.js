import { GET_MOVIES_LATEST } from "../actions/types";

const initialState = {
  results: []
};

const getMoviesLatest = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_LATEST:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getMoviesLatest;
