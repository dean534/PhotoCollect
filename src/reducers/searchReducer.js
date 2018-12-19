import { INPUT_QUERY, STORE_DATA, CLEAR_DATA } from "../actions";

const initial = {
  query: null,
  photosData: []
};

const searchReducer = (state = initial, action) => {
  switch (action.type) {
    case INPUT_QUERY:
      return { ...state, query: action.query };
    case STORE_DATA:
      return { ...state, photosData: [...action.payload] };
    case CLEAR_DATA:
      return { ...state, photosData: [] } 
      default:
      return state;
  }
};

export default searchReducer;
