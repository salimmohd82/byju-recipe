import {connect} from "react-redux";

import Header from "../view/Header";

import {
  doLogin
} from "../actions/user.actions";

const mapStateToProps = ({user}) => {
  return {
    loggedInUser: user.loggedIn,
    isLoggedIn: user.isLoggedIn
  }
};

const mapDispatchToProps = {
  doLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
