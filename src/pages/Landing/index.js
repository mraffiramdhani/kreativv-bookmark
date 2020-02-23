import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LandingImage from "../../assets/images/book_reading.svg";
import * as ROUTES from "../../constants/routes";

function Landing(props) {
  return (
    <div className="bg-white flex flex-col font-sans">
      <div className="container mx-auto px-8">
        <header className="flex flex-col sm:flex-row md:items-center justify-between py-6 relative">
          <h3
            className="text-2xl font-bold uppercase text-blue-900"
            data-testid="title"
          >
            Kreativv Bookmark
          </h3>
          <nav className="hidden md:flex text-lg">
            {props.auth.data.user !== undefined ? (
              <Link to={ROUTES.HOME}>
                <p
                  className="bg-purple-200 hover:bg-purple-300 rounded-full text-indigo-600 py-3 px-6"
                  data-testid="home_button"
                >
                  Home
                </p>
              </Link>
            ) : (
              <React.Fragment>
                <Link to={ROUTES.LOGIN}>
                  <p
                    className="text-indigo-600 hover:bg-purple-300 font-bold py-3 px-6 border border-indigo-600 rounded-full mx-6"
                    data-testid="login_button"
                  >
                    Login
                  </p>
                </Link>
                <Link to={ROUTES.REGISTER}>
                  <p
                    className="bg-purple-200 hover:bg-purple-300 rounded-full text-indigo-600 py-3 px-6"
                    data-testid="register_button"
                  >
                    Register
                  </p>
                </Link>
              </React.Fragment>
            )}
          </nav>
          <button className="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5">
            <span className="w-5 h-px mb-1 bg-orange-500"></span>
            <span className="w-5 h-px mb-1 bg-orange-500"></span>
            <span className="w-5 h-px mb-1 bg-orange-500"></span>
          </button>
        </header>
        <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-4">
          <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">
              Kreativv
            </h1>
            <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">
              Bookmark
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Track your progress of reading books.
            </p>
            <Link to={ROUTES.LOGIN}>
              <p className="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">
                get started
              </p>
            </Link>
          </div>
          <div
            className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12"
            data-testid="landing_image"
          >
            <img src={LandingImage} alt="book_reading" />
          </div>
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Landing);
