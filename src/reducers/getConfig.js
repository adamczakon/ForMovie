import { GET_CONFIG } from "../actions/types";

const initialState = {};

const getConfig = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONFIG:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getConfig;
