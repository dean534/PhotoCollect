import React from "react";
import { connect } from "react-redux";
import { signOutUser } from "../actions/user";
import Entry from "./Entry/Entry";
import Collector from "./Collector/Collector";
import config from "../api/config";
import * as firebase from 'firebase/app';

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(config.google);
    this.props.signOutUser();
  }
  render() {
    const { isUserSignIn } = this.props;
    const main = isUserSignIn ? <Collector /> : <Entry />;
    return <>{main}</>;
  }
}
const mapStateToProps = state => {
  return {
    isUserSignIn: state.user.user
  };
};

export default connect(
  mapStateToProps,
  { signOutUser }
)(App);
