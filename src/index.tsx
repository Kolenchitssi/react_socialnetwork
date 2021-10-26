import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout/Layout";
import Routes from "./components/routes/Routes";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
