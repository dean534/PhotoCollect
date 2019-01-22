import {
  CLEAR_DATA,
  DECREASE_PAGE,
  INCREASE_PAGE,
  INPUT_QUERY,
  STORE_DATA,
  STORE_DATADETAIL,
  SWITCH_PAGE,
  FETCH_FAVORITE
} from "../actions/type";

const initialState = {
  query: null,
  photosData: [],
  searchDetail: {},
  currPage: 1
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_PAGE:
      return { ...state, currPage: state.currPage + 1 };
    case DECREASE_PAGE:
      return { ...state, currPage: state.currPage - 1 };
    case SWITCH_PAGE:
      return { ...state, currPage: action.payload };
    case FETCH_FAVORITE:
      return { ...state, photosData: [...action.payload] };
    case STORE_DATADETAIL:
      return { ...state, searchDetail: action.payload };
    case INPUT_QUERY:
      return { ...state, query: action.query };
    case STORE_DATA:
      return { ...state, photosData: [...action.payload] };
    case CLEAR_DATA:
      return { ...state, photosData: [] };
    default:
      return state;
  }
};

export default searchReducer;
