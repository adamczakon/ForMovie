import { SEARCH_ITEMS } from "./types";

const searchItems = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(passItems(data)))
      .catch(error => console.log(error));
  };
};

const passItems = payload => ({
  type: SEARCH_ITEMS,
  payload
});

export default searchItems;
