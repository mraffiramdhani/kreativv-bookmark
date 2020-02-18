import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import LoginImage from "../../assets/images/book_reading-2.svg";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <form
                  className="form-horizontal w-3/4 mx-auto"
                  method="POST"
                  action="#"
                >
                  <div className="flex flex-col mt-4">
                    <input
                      data-testid="email_input"
                      id="email"
                      type="email"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      data-testid="password_input"
                      id="password"
                      type="password"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="password"
                      required
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  {/* <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="mr-2"
                    />{" "}
                    <label className="text-sm text-grey-dark">
                      Remember Me
                    </label>
                  </div> */}
                  <div className="flex flex-col mt-8">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center my-4">
                  <Link
                    to="/password"
                    className="no-underline hover:underline text-blue-dark text-xs"
                  >
                    Forgot Your Password?
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    to="/register"
                    className="bg-gray-500 hover:bg-gray-700 text-center text-white text-sm font-semibold py-2 px-4 rounded w-3/4"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg"
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

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
};

export default Login;
