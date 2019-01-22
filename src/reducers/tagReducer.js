import { SELECT_TAG } from "../actions/type";

const initialState = "Pixabay";

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TAG:
      return action.payload;
    default:
      return state;
  }
};

export default tagReducer;
