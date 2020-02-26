import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import * as ROUTES from "../../constants/routes";

function AccountBase(props) {
  if (props.auth.data.user === undefined) {
    props.history.push(ROUTES.LOGIN);
  }
  return (
    <div className="bg-gray-200 flex flex-col min-h-screen w-full">
      Hello from Account Page
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const Account = compose(connect(mapStateToProps), withRouter)(AccountBase);

Account.propTypes = {};

export default Account;
