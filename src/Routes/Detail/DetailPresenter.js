import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import "../../Components/Style/Detail.css";

const DetailPresenter = ({ result, error, loading }) => {
  console.log(result);
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="container-d">
      <img
        className="detail-img"
        src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        alt={result.title}
        title={result.title}
      />
      <div className="description">
        <div className="border">
          <span className="detail-title1">
            제목 - {result.title ? result.title : result.name}
          </span>
          <span className="detail-genres">
            장르 -{" "}
            {result.genres.map((genre) => {
              return genre.name + "/";
            })}
          </span>
          <span className="detail-date1">
            개봉일 -{" "}
            {result.release_date ? result.release_date : result.first_air_date}
          </span>
          <span className="detail-rating">평점 - {result.vote_average}/10</span>
          <span className="detail-adult">
            연령 - {result.adult ? "19세 이상" : "전체 이용가"}
          </span>
        </div>
      </div>
    </div>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
