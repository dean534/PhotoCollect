import { FETCH_LIST } from "../actions/type";

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return [...action.payload]
    default:
      return state;
  }
};

export default favoriteReducer;
