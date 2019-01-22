import { SIGNOUT_USER, SIGNIN_USER } from "../actions/type";
import * as firebase from 'firebase/app';
import 'firebase/auth';
export const signInUser = () => dispatch => {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // The signed-in user info.
      var user = result.user;
      // ...
      dispatch({
        type: SIGNIN_USER,
        payload: {
          user
        }
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const signOutUser = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      dispatch({ type: SIGNOUT_USER });
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened.
    });
};
