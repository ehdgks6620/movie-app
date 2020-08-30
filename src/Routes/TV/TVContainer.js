import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends Component {
  state = {
    TVtopRated: null,
    TVpopular: null,
    TVairingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: TVtopRated },
      } = await tvApi.TVtopRated();
      const {
        data: { results: TVpopular },
      } = await tvApi.TVpopular();
      const {
        data: { results: TVairingToday },
      } = await tvApi.TVairingToday();

      this.setState({
        TVtopRated: TVtopRated,
        TVpopular: TVpopular,
        TVairingToday: TVairingToday,
      });
    } catch {
      this.setState({
        error: "Can't load file",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { TVtopRated, TVpopular, TVairingToday, loading, error } = this.state;
    console.log(this.state);
    return (
      <div>
        <TVPresenter
          TVtopRated={TVtopRated}
          TVpopular={TVpopular}
          TVairingToday={TVairingToday}
          loading={loading}
          error={error}
        ></TVPresenter>
      </div>
    );
  }
}
