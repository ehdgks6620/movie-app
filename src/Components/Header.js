import React from "react";
import { Link } from "react-router-dom";
import "./Style/Header.css";

export default () => (
  <header>
    <ul>
      <li>
        <Link to="/" className="list">
          Main
        </Link>
      </li>
      <li>
        <Link to="/media" className="list">
          Movie
        </Link>
      </li>

      <li>
        <Link to="/tv" className="list">
          TV
        </Link>
      </li>
      <li>
        <Link to="/search" className="list">
          Search
        </Link>
      </li>
    </ul>
  </header>
);
