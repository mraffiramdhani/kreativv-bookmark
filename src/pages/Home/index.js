import React from "react";
import { MdEdit, MdVisibility, MdDelete, MdClose } from "react-icons/md";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import * as ROUTES from "../../constants/routes";
import "./style.css";

function HomeBase(props) {
  if (props.auth.data.user === undefined) {
    props.history.push(ROUTES.LOGIN);
  }

  return (
    <React.Fragment>
      <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
        <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
          <div className="border-b px-6">
            <div className="flex justify-between -mb-px">
              <div className="text-blue-dark py-4 text-lg">Progress</div>
            </div>
          </div>
          <div className="block px-6 lg:hidden">
            <div className="w-full text-center py-8 border-b">
              <div className="text-grey-darker mb-2">
                <span className="text-5xl">0</span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Book(s) Finished
              </div>
            </div>
            <div className="w-full text-center py-8 border-b">
              <div className="text-grey-darker mb-2">
                <span className="text-5xl">0</span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Page(s) Read
              </div>
            </div>
            <div className="w-full text-center py-8">
              <div className="text-grey-darker mb-2">
                <span className="text-5xl">0</span>
                <span className="text-3xl align-top">%</span>
              </div>
              <div className="text-sm uppercase text-grey tracking-wide">
                Progress Of The Last Book
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <div className="w-1/3 text-center py-8">
              <div className="border-r">
                <div className="text-grey-darker mb-2">
                  <span className="text-5xl">0</span>
                </div>
                <div className="text-sm uppercase text-grey tracking-wide">
                  Book(s) Finished
                </div>
              </div>
            </div>
            <div className="w-1/3 text-center py-8">
              <div className="border-r">
                <div className="text-grey-darker mb-2">
                  <span className="text-5xl">0</span>
                </div>
                <div className="text-sm uppercase text-grey tracking-wide">
                  Page(s) Read
                </div>
              </div>
            </div>
            <div className="w-1/3 text-center py-8">
              <div>
                <div className="text-grey-darker mb-2">
                  <span className="text-5xl">0</span>
                  <span className="text-3xl align-top">%</span>
                </div>
                <div className="text-sm uppercase text-grey tracking-wide">
                  Progress Of The Last Book
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-mx-4">
          <div className="w-full mb-6 lg:mb-0 flex flex-col">
            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div className="border-b">
                <div className="flex justify-between px-6 -mb-px">
                  <h3 className="text-blue-dark py-4 font-normal text-lg">
                    Books
                  </h3>
                  <div className="flex items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Add New
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex px-6 py-6 text-grey-darker items-center -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <span className="text-lg">22 Char</span>
                </div>
                <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center justify-between">
                  <div className="bg-yellow-400 h-2 w-48 rounded-full mr-2"></div>
                  100%
                </div>
                <div className="flex w-3/5 md:w/12 items-center">
                  <div className="w-1/2 px-4">
                    <p className="text-right">100/100 Pages</p>
                  </div>
                  <div className="w-1/2 px-4 flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 mr-2 rounded">
                      <MdVisibility size={20} />
                    </button>
                    <button className="bg-orange-400 hover:bg-orange-600 text-white px-2 py-2 mr-2 rounded">
                      <MdEdit size={20} />
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-2 rounded">
                      <MdDelete size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="modal-container bg-white w-11/12 md:w-1/2 mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
            <MdClose size={30} />
          </div>

          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Simple Modal!</p>
              <div className="modal-close cursor-pointer z-50">
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>

            <p>Modal content can go here</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>

            <div className="flex justify-end pt-2">
              <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                Action
              </button>
              <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const Home = compose(connect(mapStateToProps), withRouter)(HomeBase);

export default Home;
