import React from "react";
import Content from "./Content";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { toggleModal } from "../../../../actions/target";
import {
  search,
  increasePage,
  decreasePage,
  switchPage
} from "../../../../actions/search";

import { formValueSelector } from "redux-form";

class Album extends React.Component {
  componentDidUpdate(preProps) {
    if (
      (this.props.apiTag === "Pixabay" || this.props.apiTag === "Pexels") &&
      (this.props.currPage !== preProps.currPage ||
        this.props.searchPhotos.length !== 0)
    ) {
      this.pageUi(
        this.props.currPage,
        this.maxPage(
          this.props.searchDetail,
          this.props.apiTag,
          this.props.perPage
        )
      );
    }
  }

  pageUi = (currPage, maxPage) => {
    const pages = document.getElementsByClassName("page-item");
    const currPageTag = document.getElementById(`page-${currPage}`);
    const nextTag = document.getElementById(`page-next`);
    const preTag = document.getElementById(`page-pre`);
    //
    for (let page of pages) {
      page.classList.remove("active");
    }
    currPageTag.classList.add("active");
    // check pre next
    nextTag.classList.remove("disabled");
    preTag.classList.remove("disabled");
    if (currPage === 1) {
      preTag.classList.add("disabled");
    }
    if (currPage === maxPage) {
      nextTag.classList.add("disabled");
    }
  };

  maxPage = (searchDetail, apiTag, perPage) => {
    //判定api,因為兩個api的限制不同
    if (apiTag === "Pixabay") {
      return Math.floor(501 / perPage);
    }
    if (apiTag === "Pexels") {
      return Math.ceil(searchDetail.total_results / searchDetail.per_page);
    }
  };

  pageArr = (currPage, maxPage) => {
    const arr = [currPage];
    let index = 1;
    function sortNumber(a, b) {
      return a - b;
    }
    while (arr.length < 5 && arr.length < maxPage) {
      if (currPage + index <= maxPage) {
        arr.push(currPage + index);
      }
      if (currPage - index > 0) {
        arr.push(currPage - index);
      }
      index += 1;
    }
    return arr.sort(sortNumber);
  };

  render() {
    const {
      search,
      searchValue,
      perPage,
      searchPhotos,
      toggleModal,
      currPage,
      searchDetail,
      increasePage,
      decreasePage,
      switchPage,
      apiTag
    } = this.props;
    const searchBar =
      apiTag === "Pixabay" || apiTag === "Pexels" ? (
        <SearchBar
          search={search}
          searchValue={searchValue}
          perPage={perPage}
          switchPage={switchPage}
        />
      ) : null;
    return (
      <div className="position-relative">
        {searchBar}
        <h1>{apiTag}</h1>
        <hr />
        <Content
          photos={searchPhotos}
          toggleModal={toggleModal}
          currPage={currPage}
          dataNum={searchPhotos.length}
        />
        {searchPhotos[0] && (apiTag === "Pixabay" || apiTag === "Pexels") ? (
          <Pagination
            maxPage={this.maxPage(searchDetail, apiTag, perPage)}
            pages={this.pageArr(
              currPage,
              this.maxPage(searchDetail, apiTag, perPage)
            )}
            increasePage={increasePage}
            decreasePage={decreasePage}
            switchPage={switchPage}
            search={search}
            searchValue={searchValue}
            perPage={perPage}
            currPage={currPage}
          />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const selector = formValueSelector("searchBar");
  const searchValue = selector(state, "search");
  const perPage = selector(state, "perPage");
  return {
    searchPhotos: state.search.photosData,
    searchDetail: state.search.searchDetail,
    searchValue,
    perPage,
    currPage: state.search.currPage,
    apiTag: state.tag
  };
};
export default connect(
  mapStateToProps,
  { toggleModal, search, increasePage, decreasePage, switchPage }
)(Album);
