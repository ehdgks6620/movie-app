import React from "react";
import ReactDOM from "react-dom";

import "./api";
import { HashRouter } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";

ReactDOM.render(
  <HashRouter>
    <Header></Header>
    <Body></Body>
  </HashRouter>,
  document.getElementById("root")
);
