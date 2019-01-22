import React from "react";
import "./styles.css";

function Pagination({
  pages,
  decreasePage,
  increasePage,
  switchPage,
  search,
  perPage,
  searchValue,
  currPage,
  maxPage
}) {
  const handleSwitch = (action, type = null) => page => e => {
    let toPage = page;
    if (type === "minus" && currPage === 1) {
      return;
    } else if (type === "minus") {
      toPage = currPage - 1;
    }

    if (type === "add" && currPage === maxPage) {
      return;
    } else if (type === "add") {
      toPage = currPage + 1;
    }

    action(page);
    search(searchValue, perPage, toPage);
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <nav aria-label="...">
        <ul className="pagination">
          <li
            className="page-item"
            id="page-pre"
            onClick={handleSwitch(decreasePage, "minus")()}
          >
            <span className="page-link pointer">Previous</span>
          </li>
          {pages.map(page => (
            <li
              key={`page-${page}`}
              id={`page-${page}`}
              className="page-item"
              onClick={handleSwitch(switchPage)(page)}
            >
              <span className="page-link pointer">{page}</span>
            </li>
          ))}

          <li
            className="page-item"
            id="page-next"
            onClick={handleSwitch(increasePage, "add")()}
          >
            <span className="page-link pointer">Next</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
