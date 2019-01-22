import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import tagReducer from "./tagReducer";
import targetReducer from './targetReducer'
import favoriteReducer from './favoriteReducer'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  search: searchReducer,
  user: userReducer,
  tag: tagReducer,
  form: formReducer,
  target: targetReducer,
  favorite: favoriteReducer
});

export default reducers;
