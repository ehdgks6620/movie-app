import React from "react";
import PropTypes from "prop-types";
import "./Style/Poster.css";
import { Link } from "react-router-dom";

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`} className="a">
    <div className="container-i">
      <div className="imgContainer">
        <img
          className="poster-img"
          src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
          alt={title}
          title={title}
        ></img>

        <span className="rating">
          <span role="img" aria-lable="rating">
            ⭐
          </span>
          {rating}/10
        </span>
        <span className="title">{title}</span>
        <span className="year">{year}</span>
      </div>
    </div>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool.isRequired,
};

export default Poster;
