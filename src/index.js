import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/state";
import reportWebVitals from "./reportWebVitals";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

reportWebVitals();
