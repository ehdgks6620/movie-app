import React from "react";
import PropTypes from "prop-types";
import "../../Components/Style/Homepresenter.css";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";

const HomePresenter = ({
  nowPlaying,
  MovieUpComing,
  MoviePopular,
  error,
  loading,
}) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <div className="container">
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="NOW PLAYING">
          {nowPlaying.map((movies) => (
            <Poster
              key={movies.id}
              id={movies.id}
              imgUrl={movies.poster_path}
              title={movies.title.length>9 ?`${movies.title.substring(0,9)}...` : movies.title}
              rating={movies.vote_average}
              year={movies.release_date&&movies.release_date.substring(0,4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {MovieUpComing && MovieUpComing.length > 0 && (
        <Section title="UPCOMING">
          {MovieUpComing.map((movies) => (
            <Poster
              key={movies.id}
              id={movies.id}
              imgUrl={movies.poster_path}
              title={movies.title.length>9 ?`${movies.title.substring(0,9)}...` : movies.title}
              rating={movies.vote_average}
              year={movies.release_date&&movies.release_date.substring(0,4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {MoviePopular && MoviePopular.length > 0 && (
        <Section title="POPULAR">
          {MoviePopular.map((movies) => (
            <Poster
              key={movies.id}
              id={movies.id}
              imgUrl={movies.poster_path}
              title={movies.title.length>9 ?`${movies.title.substring(0,9)}...` : movies.title}
              rating={movies.vote_average}
              year={movies.release_date && movies.release_date.substring(0,4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
    </div>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  MovieUpcoming: PropTypes.array,
  MoviePopular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
