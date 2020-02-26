import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withFirebase } from "../../constants/Firebase";

import * as ROUTES from "../../constants/routes";

function ForgotPasswordBase(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = event => {
    event.preventDefault();

    props.firebase
      .doPasswordReset(email)
      .then(() => {
        setEmail("");
        setError(null);
      })
      .catch(error => {
        setError(error);
      });
  };

  return (
    <div className="font-sans bg-blue-800 h-screen py-12">
      <div className="container mx-auto">
        <div className="flex justify-center px-6">
          <div className="w-full xl:w-1/2 lg:w-11/12 md:w-1/2 flex">
            <div className="w-full bg-white p-5 rounded-lg shadow-lg">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below
                  and we'll send you a link to reset your password!
                </p>
              </div>
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
                  role="alert"
                >
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline ml-2">{error.message}</span>
                </div>
              )}
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter Email Address..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={onSubmit}
                  >
                    Reset Password
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to={ROUTES.REGISTER}
                  >
                    Create an Account!
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to={ROUTES.LOGIN}
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ForgotPassword = withFirebase(ForgotPasswordBase);

ForgotPassword.propTypes = {
  email: PropTypes.string
};

export default ForgotPassword;
