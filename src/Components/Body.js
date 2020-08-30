import React from "react";
import MainContainer from "../Routes/Main";
import HomeContainer from "../Routes/Movie";
import DetailContainer from "../Routes/Detail";
import TVContainer from "../Routes/TV";
import SearchContainer from "../Routes/Search";
import { Route, Redirect } from "react-router-dom";
import "./Style/Body.css";

//composition은 두개 이상의 route의 랜더링하는 방식(동시에)
export default () => (
  <span>
    <Route path="/" exact component={MainContainer}></Route>
    <Route path="/media" exact component={HomeContainer} />
    <Route path="/tv" exact component={TVContainer} />
    <Route path="/search" component={SearchContainer} />
    <Route path="/movie/:id" component={DetailContainer} />
    <Route path="/show/:id" component={DetailContainer} />
    <Redirect from="*" to="/" />
  </span>
);
