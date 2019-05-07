import {connect} from "react-redux";

import {
  doLogout
} from "../actions/user.actions";

import Logout from "../view/Logout";

const mapStateToProps = ({user}) => {
  return {
    isLoggedIn: user.isLoggedIn
  }
};

const mapDispatchToProps = {
  doLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
