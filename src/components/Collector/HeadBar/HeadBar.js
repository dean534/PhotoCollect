import React from "react";
import { connect } from "react-redux";
import { signOutUser } from "../../../actions/user";
import "./styles.css";

function HeadBar({ signOutUser, userName, userPhoto }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand navbar-logo">Collector</span>
      <div className="headBar_nav">
        <span  className="headBar_user">
          <div
            className="rounded-circle overflow-hidden headBar_avatar"
          >
            <img className="img-fluid" src={userPhoto} alt="avatar" />
          </div>
          <span className="text-white headBar_username">
            {userName}
          </span>
        </span>
        <button
          onClick={signOutUser}
          className="text-white headBar_btn"
          href="#"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
// export default HeadBar;

const mapStateToProps = state => {
  return {
    userName: state.user.user.displayName,
    userPhoto: state.user.user.photoURL
  };
};
export default connect(
  mapStateToProps,
  { signOutUser }
)(HeadBar);
