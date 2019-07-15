import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/main.scss";

import Navbar from "./Navbar";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import SearchResults from "./SearchResults";

import getConfig from "../actions/getConfig";

class App extends Component {
  componentDidMount() {
    this.props.getConfig(
      `https://api.themoviedb.org/3/configuration?api_key=${
        process.env.REACT_APP_API_KEY
      }`
    );
  }
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <Route path='/' exact component={Home} />
            <Route path='/movie-details/:id' exact component={MovieDetails} />
            <Route path='/search/:id/' exact component={SearchResults} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = state => ({
  config: state.getConfig
});

const mapDispatcherToProps = dispatch => ({
  getConfig: url => dispatch(getConfig(url))
});

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(App);
