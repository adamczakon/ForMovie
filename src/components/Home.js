import React, { Component } from "react";
import { connect } from "react-redux";

import HomeBanner from "./HomeBanner";
import Movies from "./Movies";
import Footer from "./Footer";
import Spinner from "./Spinner";

import getMoviesUpcoming from "../actions/getMoviesUpcoming";
import getMoviesLatest from "../actions/getMoviesLatest";
import getMoviesNowPlaying from "../actions/getMoviesNowPlaying";
import getMoviesPopular from "../actions/getMoviesPopular";
import getConfig from "../actions/getConfig";

class Home extends Component {
  componentDidMount() {
    this.props.getMoviesLatest(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US`
    );
    this.props.getMoviesUpcoming(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&page=1`
    );
    this.props.getMoviesNowPlaying(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&page=1`
    );
    this.props.getMoviesPopular(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&page=1`
    );
    this.props.getConfig(
      `https://api.themoviedb.org/3/configuration?api_key=${
        process.env.REACT_APP_API_KEY
      }`
    );
  }

  render() {
    if (this.props.moviesNowPlaying.results.length === 0) {
      return <Spinner />;
    } else {
      return (
        <div>
          <HomeBanner
            items={this.props.moviesNowPlaying.results}
            config={this.props.config}
          />
          <Movies
            items={this.props.moviesUpcoming.results}
            config={this.props.config}
            header="Upcoming"
          />
          <Movies
            items={this.props.moviesNowPlaying.results}
            config={this.props.config}
            header="Now Playing"
          />
          <Movies
            items={this.props.moviesLatest.results}
            config={this.props.config}
            header="Best"
          />
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  moviesUpcoming: state.getMoviesUpcoming,
  moviesLatest: state.getMoviesLatest,
  moviesNowPlaying: state.getMoviesNowPlaying,
  moviesPopular: state.getMoviesPopular,
  config: state.getConfig
});

const mapDispatchToProps = dispatch => ({
  getMoviesUpcoming: url => dispatch(getMoviesUpcoming(url)),
  getMoviesLatest: url => dispatch(getMoviesLatest(url)),
  getMoviesNowPlaying: url => dispatch(getMoviesNowPlaying(url)),
  getMoviesPopular: url => dispatch(getMoviesPopular(url)),
  getConfig: url => dispatch(getConfig(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
