import {SELECT_PHOTO, DESELECT_PHOTO, TOGGLE_MODAL} from '../actions/type'

const initialState = { modal: false, photo: {} };

 const targetReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
    return {...state, modal:!state.modal}
    case SELECT_PHOTO:
      return { ...state, photo: action.payload };
    case DESELECT_PHOTO:
      return { ...state, photo: {} };
    default:
      return state;
  }
};
export default targetReducer