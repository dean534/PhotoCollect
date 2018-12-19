import React from "react";
import { connect } from "react-redux";
import { Form, Input } from "semantic-ui-react";
import search from "../../../../actions/searchAction";

function SearchBar(props) {
  const { search } = props;
  const onChangeContol = e => search(e.target.value);
  return (
    <Form>
      <Input icon="search" onChange={onChangeContol} />
    </Form>
  );
}

export default connect(
  null,
  { search }
)(SearchBar);
