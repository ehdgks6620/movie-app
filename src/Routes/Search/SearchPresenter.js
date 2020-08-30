import React from "react";
import PropType from "prop-types";
import "../../Components/Style/Search.css";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateSubmit,
}) => (
  <div className="container_s">
    <form className="form" onSubmit={handleSubmit} onChange={updateSubmit}>
      <input
        placeholder="search"
        type="text"
        className="input"
        value={searchTerm}
      ></input>
    </form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="MOVIE RESULT">
            {movieResults.map((movies) => (
              <Poster
              key={movies.id}
              id={movies.id}
              imgUrl={movies.poster_path}
              title={movies.title.length>10 ? `${movies.title.substring(0,10)}...` : movies.title}
              rating={movies.vote_average}
              year={movies.release_date.substring(0,4)}
              isMovie={true}
            />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV RESULT">
            {tvResults.map((shows) => (
              <Poster
              key={shows.id}
              id={shows.id}
              imgUrl={shows.poster_path}
              title={shows.name.length>10 ? `${shows.name.substring(0,10)}...` : shows.name}
              rating={shows.vote_average}
              year={shows.first_air_date.substring(0,4)}
              isMovie={false}
            />
            ))}
          </Section>
        )}
      </>
    )}
  </div>
);

SearchPresenter.propType = {
  movieResults: PropType.array,
  tvResults: PropType.array,
  searchTerm: PropType.array,
  loading: PropType.bool.isRequired,
  error: PropType.string,
  handleSubmit: PropType.func.isRequired,
  ubdateSubmit: PropType.func.isRequired,
};

export default SearchPresenter;
