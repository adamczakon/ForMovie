import { SEARCH_ITEMS } from "../actions/types";

const initialState = {
  results: []
};

const searchItems = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ITEMS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default searchItems;
