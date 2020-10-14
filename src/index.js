import React from "react";
import ReactDOM from "react-dom";
import "./Css/homepage.css";
import "./Css/navbar.css";
import "./Css/banner.css";
import "./Css/netflix_orignals.css";
import DataLayer from "./Componets/datalayer";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
