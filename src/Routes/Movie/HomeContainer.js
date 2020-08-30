import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { tvApi, moviesApi } from "../../api";

export default class extends Component {
  state = {
    nowPlaying: null,
    MovieUpComing: null,
    MoviePopular: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: movieUpComing },
      } = await moviesApi.movieUpComing();

      const {
        data: { results: moviePopular },
      } = await moviesApi.moviePopular();

      this.setState({
        nowPlaying: nowPlaying,
        MovieUpComing: movieUpComing,
        MoviePopular: moviePopular,
      });

      console.log(this.state);
    } catch {
      this.setState({
        error: "Can't find movies informatino.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      nowPlaying,
      MovieUpComing,
      MoviePopular,
      error,
      loading,
    } = this.state;
    console.log(nowPlaying);
    return (
      <div>
        <HomePresenter
          nowPlaying={nowPlaying}
          MovieUpComing={MovieUpComing}
          MoviePopular={MoviePopular}
          error={error}
          loading={loading}
        ></HomePresenter>
      </div>
    );
  }
}
