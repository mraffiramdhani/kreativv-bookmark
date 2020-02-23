import React, { useState } from "react";
import { NavLink, Switch, Route, withRouter } from "react-router-dom";
import {
  MdDashboard,
  MdAccountBox,
  MdPowerSettingsNew,
  MdMenu,
  MdNotifications
} from "react-icons/md";
import { withFirebase } from "../constants/Firebase";
import { compose } from "recompose";
import { connect } from "react-redux";
import { unsetAuthUser } from "../redux/action/auth";

import * as ROUTES from "../constants/routes";
import HomePage from "../pages/Home";
import AccountPage from "../pages/Account";

function DashboardBase(props) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const onMenuVisibleChange = () => {
    setMenuVisible(!isMenuVisible);
  };

  const signOut = () => {
    props.firebase
      .doSignOut()
      .then(() => {
        props.unsetAuthUser();
        props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="font-sans antialiased h-screen flex">
      <div className="bg-gray-800 text-purple-300 w-24 hidden md:block">
        <div className="flex flex-col">
          <div className="h-12 my-4">
            <p className="text-gray-500 text-center text-4xl">KB</p>
          </div>
          <NavLink
            to={ROUTES.HOME}
            activeStyle={{
              borderLeft: "1px solid white",
              color: "white"
            }}
            className="flex flex-col text-gray-600 hover:text-gray-400 items-center my-8"
          >
            <MdDashboard size={34} />
            <p className="text-sm">Home</p>
          </NavLink>
          <NavLink
            to={ROUTES.ACCOUNT}
            activeStyle={{
              borderLeft: "1px solid white",
              color: "white"
            }}
            className="flex flex-col text-gray-600 hover:text-gray-400 items-center my-8"
          >
            <MdAccountBox size={34} />
            <p className="text-sm">Profile</p>
          </NavLink>
          <button
            className="flex flex-col text-gray-600 hover:text-gray-400 items-center my-8"
            onClick={signOut}
          >
            <MdPowerSettingsNew size={34} />
            <p className="text-sm">Log Out</p>
          </button>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col min-h-full overflow-y-auto w-full">
        <div>
          <div className="container mx-auto px-4">
            <div className="flex items-center md:justify-between py-4">
              <div
                className="w-1/12 md:hidden text-gray-800 hover:text-gray-600 cursor-pointer"
                onClick={onMenuVisibleChange}
              >
                <MdMenu size={34} />
              </div>
              <div className="w-10/12 md:w-auto text-center text-gray-800 text-2xl">
                My Dashboard
              </div>
              <div
                className="w-1/12 md:w-auto flex justify-end text-right text-gray-800 hover:text-gray-600 cursor-pointer"
                onClick={() => console.log("im clicked")}
              >
                <p className="flex">
                  <span className="bg-red-500 w-2 h-2 rounded-full align-top -mx-2"></span>
                  <MdNotifications size={34} />
                </p>
              </div>
            </div>
          </div>
          {isMenuVisible && (
            <div className="md:hidden bg-white">
              <div className="container mx-auto px-4">
                <div class="flex -mb-px mr-8">
                  <NavLink
                    to={ROUTES.HOME}
                    activeClassName="text-gray-800"
                    className="no-underline text-gray-600 flex items-center py-4"
                  >
                    <MdDashboard size={28} />
                    <p className="pl-4">Home</p>
                  </NavLink>
                </div>
                <div class="flex -mb-px mr-8">
                  <NavLink
                    to={ROUTES.ACCOUNT}
                    activeClassName="text-gray-800"
                    className="no-underline text-gray-600 flex items-center py-4"
                  >
                    <MdAccountBox size={28} />
                    <p className="pl-4">Profile</p>
                  </NavLink>
                </div>
                <button class="flex -mb-px mr-8" onClick={signOut}>
                  <p className="no-underline text-gray-600 flex items-center py-4">
                    <MdPowerSettingsNew size={28} />
                    <p className="pl-4">Log Out</p>
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
        <Switch>
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    unsetAuthUser: () => dispatch(unsetAuthUser())
  };
};

const Dashboard = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withFirebase
)(DashboardBase);

export default Dashboard;
