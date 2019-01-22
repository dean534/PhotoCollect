import React from "react";
import { selectTag } from "../../../../actions/tag";
import { clearData, fetchFavorite } from "../../../../actions/search";
import "./styles.css";
import { connect } from "react-redux";

function Aside({ selectTag, clearData, favoriteTags, fetchFavorite, uid }) {

  const handleClick = e => {
    selectTag(e.target.innerText);
    clearData();

    //ui
    const apis = document.getElementsByClassName("api");
    for (let api of apis) {
      api.classList.remove("active");
    }
    e.target.classList.add("active");

    //fetch favorite
    if (e.target.innerHTML !== "Pixabay" && e.target.innerHTML !== "Pexels") {
      fetchFavorite(e.target.innerHTML, uid);
    }
  };


  return (
    <div className="nav flex-column nav-pills">
      <div
        className="nav-link text-capitalize bg-secondary font-weight-bold menu_title"
      >
        source
      </div>
      <span
        className="nav-link api active pl-4 text-capitalize pointer"
        onClick={handleClick}
      >
        Pixabay
      </span>
      <span
        className="nav-link api pl-4 text-capitalize pointer"
        onClick={handleClick}
      >
        Pexels
      </span>
      <div
        className="nav-link text-capitalize bg-secondary font-weight-bold"
      >
        favorite
      </div>
      {favoriteTags.map(tag => (
        <span
          key={tag}
          className="nav-link api pl-4 text-capitalize pointer"
          onClick={handleClick}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    favoriteTags: state.favorite,
    uid:state.user.user.uid
  };
};
export default connect(
  mapStateToProps,
  { selectTag, clearData, fetchFavorite }
)(Aside);
