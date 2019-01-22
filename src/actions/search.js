import {
  CLEAR_DATA,
  DECREASE_PAGE,
  INCREASE_PAGE,
  STORE_DATA,
  STORE_DATADETAIL,
  SWITCH_PAGE,
  FETCH_FAVORITE
} from "../actions/type";
import Axios from "axios";
import api from "../api/apiData";
import * as firebase from 'firebase/app';
import 'firebase/firestore';

//data
const storeData = payload => {
  return {
    type: STORE_DATA,
    payload: payload
  };
};

const storeDataDetail = payload => {
  return {
    type: STORE_DATADETAIL,
    payload: payload
  };
};

export const clearData = () => {
  return {
    type: CLEAR_DATA
  };
};

export const search = (query, perpage, page) => (dispatch, getState) => {
  if (query) {
    Axios.get(api[getState().tag].url, {
      headers: api[getState().tag].headers,
      params: api[getState().tag].params(query, perpage, page)
    })
      .then(res => {
        const data = res.data.hits || res.data.photos;
        const detail = { ...res.data, hits: null, photos: null };
        dispatch(storeData(data));
        dispatch(storeDataDetail(detail));
      })
      .catch(e => console.log(e));
  }
};

// page

export const increasePage = () => {
  return {
    type: INCREASE_PAGE
  };
};

export const decreasePage = () => {
  return {
    type: DECREASE_PAGE
  };
};
export const switchPage = page => {
  return {
    type: SWITCH_PAGE,
    payload: page
  };
};



export const fetchFavorite = (tag, uid) => dispatch => {
  var db = firebase.firestore();
  const dataDoc = db.collection("photoData").doc(uid)
  dataDoc
    .get()
    .then(function(doc) {
      if (doc.exists) {
        dispatch({ type: FETCH_FAVORITE, payload: doc.data()[tag] });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};
