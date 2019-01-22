import { SELECT_PHOTO, DESELECT_PHOTO, TOGGLE_MODAL } from "../actions/type";

export const toggleModal = (data) =>(dispatch, getState)=> {
    if (!getState().target.modal){
        //先將資料加入
        dispatch({type:SELECT_PHOTO, payload:data});
        //再去做ui
        dispatch({type:TOGGLE_MODAL})

    }else{
        //再去做ui
        dispatch({type:TOGGLE_MODAL})
        //先將資料加入
        dispatch({type: DESELECT_PHOTO});

    }
};
