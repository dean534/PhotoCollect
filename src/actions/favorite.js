import { FETCH_LIST } from "../actions/type";

import * as firebase from 'firebase/app';
import 'firebase/firestore';

export const fetchList = (uid) => dispatch=> {
  var db = firebase.firestore();
  const dataDoc = db.collection("photoData").doc(uid)
  dataDoc
    .get()
    .then(function(doc) {
      if (doc.exists) {
        dispatch({ type: FETCH_LIST, payload: doc.data().allTag });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};
