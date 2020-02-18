import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../constants/Firebase";

import LoginImage from "../../assets/images/book_reading-2.svg";
import * as ROUTES from "../../constants/routes";

function Login(props) {
  return (
    <div className="bg-blue-800 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
          style={{ height: "500px" }}
        >
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-blue-800 text-4xl text-center">Sign In</h1>
              <div className="w-full mt-4">
                <LoginForm />
                <hr className="my-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to={ROUTES.FORGET_PASSWORD}
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to={ROUTES.REGISTER}
                  >
                    Don't have an account yet? Register!
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg bg-yellow-400"
            style={{
              backgroundImage: `url(${LoginImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function LoginFormBase(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = event => {
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError(null);
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError(error);
      });

    event.preventDefault();
  };

  return (
    <React.Fragment>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline ml-2">{error.message}</span>
        </div>
      )}
      <form className="form-horizontal w-3/4 mx-auto" method="POST" action="#">
        <div className="flex flex-col mt-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            data-testid="email_input"
            id="email"
            type="email"
            className="flex-grow h-8 px-2 border rounded border-grey-400 shadow text-sm"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Password
          </label>
          <input
            data-testid="password_input"
            id="password"
            type="password"
            className="flex-grow h-8 px-2 rounded border border-grey-400 shadow text-sm"
            name="password"
            required
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-8">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
            onClick={onSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

const LoginForm = compose(withRouter, withFirebase)(LoginFormBase);

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
};

export default Login;

export { LoginForm };
