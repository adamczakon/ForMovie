import { GET_CONFIG } from "./types.js";

export const getConfig = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passConfig(data)))
      .catch(error => console.log(error));
  };
};

const passConfig = payload => ({
  type: GET_CONFIG,
  payload
});

export default getConfig;
