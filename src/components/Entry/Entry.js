import React from "react";
import { connect } from "react-redux";
import { signInUser } from "../../actions/user";
import "./style.css";
function Entry({ signInUser }) {
  return (
    <div className="d-flex align-items-center justify-content-center entry_header">
      <span className="text-center w-75 p-4 rounded text-light entry_segment">
        <div className="my-3">
          <i className="fas fa-search fa-5x" />
        </div>
        <div>
          <h2>Collector</h2>
          <div>You can search images and collect them.</div>
        </div>
        <button className="btn mt-3 entry_btn" onClick={signInUser}>
          <i className="fab fa-google-plus-g" />
          <span className="ml-3">Sign in</span>
        </button>
      </span>
    </div>
  );
}

export default connect(
  null,
  { signInUser }
)(Entry);
