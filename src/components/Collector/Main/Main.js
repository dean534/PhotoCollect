import React from "react";
import Aside from "./Aside/Aside";
import Album from "./Album/Album";
import "./styles.css";

function Main() {
  return (
    <div className="container mt-3 py-3 bg-white album_main">
      <div className="row">
        <div className="col-md-3">
          <Aside />
        </div>
        <div className="col-md-9">
          <Album />
        </div>
      </div>
    </div>
  );
}

export default Main;
