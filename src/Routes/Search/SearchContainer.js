import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    } else {
    }
  };
  searchByTerm = async () => {
    this.setState({
      loading: true,
    });
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.movieSearch(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.TVsearch(searchTerm);
      console.log(movieResults, tvResults);

      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({
        error: "Can't load file",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  updateTerm = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
    console.log(event);
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    console.log(this.state);
    return (
      <div>
        <SearchPresenter
          movieResults={movieResults}
          tvResults={tvResults}
          searchTerm={searchTerm}
          loading={loading}
          error={error}
          handleSubmit={this.handleSubmit}
          updateSubmit={this.updateTerm}
        ></SearchPresenter>
      </div>
    );
  }
}
