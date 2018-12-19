import { INPUT_QUERY, STORE_DATA, CLEAR_DATA } from "../actions";
import Axios from "axios";

const clearData = () => {
  return {
    type: CLEAR_DATA
  };
};

const inputQuery = input => {
  return {
    type: INPUT_QUERY,
    query: input
  };
};

const storeData = payload => {
  return {
    type: STORE_DATA,
    payload: payload
  };
};

const search = query => (dispatch, getState) => {
  dispatch(inputQuery(query));
  if (query) {
    Axios.get("https://pixabay.com/api/", {
      params: {
        key: "10606507-08decefeedcf01b749be23188",
        q: query,
        per_page: 50,
        page: 1
      }
    })
      .then(res => res.data.hits)
      .then(data => dispatch(storeData(data)));
  } else {
    dispatch(clearData());
  }
};

export default search;
