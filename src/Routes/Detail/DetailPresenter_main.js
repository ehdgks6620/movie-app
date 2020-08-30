import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import "../../Components/Style/Detail_main.css";

const DetailPresenter_main = ({ result, error, loading }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <div className="Container">
      <img
        className="Backdrop"
        src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      ></img>
      <div className="Content">
        <img
          className="Cover"
          src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        />
        <div className="Data">
          <span className="Title">
            {result.title ? result.title : result.name}
          </span>

          <div className="ItemContainer">
            <span className="Item">
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </span>
            <span className="divider">∘</span>
            <span className="Item">
              {result.runtime ? result.runtime : result.episode_run_time}분
            </span>
            <span className="divider">∘</span>
            <span className="Item">{result.genres[0].name}</span>
            <span className="divider">∘</span>
            <span className="Item">⭐{result.vote_average}/10</span>
          </div>
          <div className="OverViewForm">
            <span className="OverView">
              {result.overview.length > 295
                ? `${result.overview.substring(0, 295)}...`
                : result.overview}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

DetailPresenter_main.propTypes = {
  result: PropTypes.object.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter_main;
