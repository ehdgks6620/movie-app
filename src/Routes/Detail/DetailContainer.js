import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import DetailPresenter_main from "./DetailPresenter_main";
import { moviesApi, tvApi } from "../../api";

export default class extends Component {
  state = {
    result: null,
    error: null,
    loading: true,
    isMovie: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;
    this.isMovie = pathname.includes("/movie/");
    console.log(this.props);
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result;
    try {
      if (this.isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.TVshowDetail(parsedId));
      }
      console.log(result);
    } catch {
      this.setState({
        error: "can't load file",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(result);
    return (
      <DetailPresenter_main
        key={result}
        result={result}
        error={error}
        loading={loading}
      ></DetailPresenter_main>
    );
  }
}
