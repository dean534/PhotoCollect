import React from "react";
import HeadBar from "./HeadBar/HeadBar";
import Main from "./Main/Main";
import Modal from "../Collector/Modal/Modal";
import { connect } from "react-redux";
import { fetchList } from "../../actions/favorite";
import "./styles.css";

class Collector extends React.Component {
  componentDidMount() {
    this.props.fetchList(this.props.uid);
  }
  render() {
    const { isOpen } = this.props;
    return (
      <div className="collector_main">
        <HeadBar />
        <Main />
        {isOpen ? <Modal /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.target.modal,
    uid: state.user.user.uid
  };
};

export default connect(
  mapStateToProps,
  { fetchList }
)(Collector);
