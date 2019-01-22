import React from "react";
import { Field, reduxForm } from "redux-form";

function SearchBar({ search, perPage, searchValue, switchPage }) {
  const handleClick = e => {
    search(searchValue, perPage);
    switchPage(1);
  };
  return (
    <div>
      <div className="input-group mb-3">
        <Field
          name="search"
          className="form-control"
          component="input"
          type="text"
          placeholder="Search..."
        />

        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleClick}
          >
            <i className="fas fa-search " />
          </button>
        </div>
      </div>

      <div>
        <label>per page</label>
        <div className="form-group">
          <Field name="perPage" className="form-control" component="select">
            <option />
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </Field>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default reduxForm({
  form: "searchBar",
  initialValues: { perPage: "15" }
})(SearchBar);
