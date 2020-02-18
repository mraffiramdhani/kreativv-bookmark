import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./pages/App";
import "./styles.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storage from "./redux/store";

import Firebase, { FirebaseContext } from "./constants/Firebase";

const { store, persistor } = storage();

const Main = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </FirebaseContext.Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
