import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../constants/Firebase";

import RegisterImage from "../../assets/images/register.svg";
import * as ROUTES from "../../constants/routes";

function Register(props) {
  return (
    <div className="font-sans bg-blue-800 py-12">
      <div className="container mx-auto">
        <div className="flex justify-center px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
            <div
              className="w-full h-auto bg-yellow-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url(${RegisterImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-4xl text-center text-blue-800">
                Create an Account
              </h3>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterFormBase(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const isInvalid =
    name === "" ||
    email === "" ||
    password === "" ||
    password !== confirm_password;

  const onSubmit = event => {
    props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(null);
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        console.log(error);
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
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Full Name
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="md:ml-2">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="c_password"
              type="password"
              placeholder="******************"
              value={confirm_password}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6 text-center">
          {isInvalid ? (
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-300 rounded cursor-not-allowed"
              disabled={isInvalid}
            >
              Register
            </button>
          ) : (
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
            >
              Register
            </button>
          )}
        </div>
        <hr className="mb-6 border-t" />
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
            to={ROUTES.LOGIN}
          >
            Already have an account? Login!
          </Link>
        </div>
      </form>
    </React.Fragment>
  );
}

const RegisterForm = compose(withRouter, withFirebase)(RegisterFormBase);

RegisterForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirm_password: PropTypes.string,
  error: PropTypes.string
};

export default Register;

export { RegisterForm };
