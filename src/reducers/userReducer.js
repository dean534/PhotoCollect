import { SIGNOUT_USER, SIGNIN_USER } from "../actions/type";

const initialState = { user: null, token: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return action.payload;
    case SIGNOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
