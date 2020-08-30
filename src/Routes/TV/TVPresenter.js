import React from "react";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";

const TVPresenter = ({
  TVtopRated,
  TVpopular,
  TVairingToday,
  loading,
  error,
}) =>
  loading ? (
    <Loader />
  ) : (
    <div className="container">
      {TVtopRated && TVtopRated.length > 0 && (
        <Section title="TOPRATED">
          {TVtopRated.map((shows) => (
            <Poster
              key={shows.id}
              id={shows.id}
              imgUrl={shows.poster_path}
               title={shows.name.length>10 ? `${shows.name.substring(0,9)}...` : shows.name}
              rating={shows.vote_average}
              year={shows.first_air_date.substring(0,4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {TVpopular && TVpopular.length > 0 && (
        <Section title="POPULAR">
          {TVpopular.map((shows) => (
           <Poster
              key={shows.id}
              id={shows.id}
              imgUrl={shows.poster_path}
               title={shows.name.length>10 ? `${shows.name.substring(0,9)}...` : shows.name}
              rating={shows.vote_average}
              year={shows.first_air_date.substring(0,4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {TVairingToday && TVairingToday.length > 0 && (
        <Section title="AiringToday">
          {TVairingToday.map((shows) => (
            <Poster
              key={shows.id}
              id={shows.id}
              imgUrl={shows.poster_path}
              title={shows.name.length>10 ? `${shows.name.substring(0,9)}...` : shows.name}
              rating={shows.vote_average}
              year={shows.first_air_date.substring(0,4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
    </div>
  );

export default TVPresenter;
