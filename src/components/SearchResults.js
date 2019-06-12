import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "./Spinner";

import searchItems from "../actions/searchItems";

class SearchResults extends Component {
  state = {
    searchQuery: "",
    page: 1
  };

  componentDidMount() {
    this.props.searchItems(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${this.props.match.params.id}&page=${
        this.state.page
      }&include_adult=false`
    );
  }

  componentDidUpdate(prevProps) {
    // search for other item
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.searchItems(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${
          this.props.match.params.id
        }&page=1&include_adult=false`
      );
    }
  }

  //change search results pages
  changePage = pageTransition => {
    let page = this.state.page;
    if (this.state.page === 1 && pageTransition === "prev") {
      this.setState({ page: 1 });
    } else if (pageTransition === "next") {
      this.setState({ page: this.state.page + 1 });
      page = this.state.page + 1;
    } else if (pageTransition === "prev") {
      this.setState({ page: this.state.page - 1 });
      page = this.state.page - 1;
    }

    this.props.searchItems(
      `https://api.themoviedb.org/3/search/multi?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${
        this.props.match.params.id
      }&page=${page}&include_adult=false`
    );
  };

  render() {
    if (this.props.searchItemsResults.results.length === 0) {
      return <Spinner />;
    } else {
      return (
        <section className="search-results">
          <div className="search-results-header">
            <h2 className="search-results-title">
              Search results for {this.props.match.params.id}
            </h2>
            <div className="search-results-separator" />
          </div>
          <div className="search-results-container">
            {this.props.searchItemsResults.results.length > 0
              ? this.props.searchItemsResults.results.map(item => (
                  <Link
                    key={item.id}
                    to={`/movie-details/${item.id}`}
                    className="search-results-container-link"
                  >
                    <div className="search-results-container-item">
                      <img
                        className="search-results-container-item-image"
                        src={
                          this.props.config.images
                            ? this.props.config.images.secure_base_url +
                              this.props.config.images.poster_sizes[6] +
                              item.poster_path
                            : ""
                        }
                        alt=""
                      />
                      <h3 className="search-results-container-item-title">
                        {item.media_type === "tv" ? item.name : item.title}
                      </h3>
                    </div>
                  </Link>
                ))
              : null}
          </div>
          <div className="search-results-pagination">
            <button
              className="search-results-pagination-button"
              onClick={() => this.changePage("prev")}
            >
              Previous Page
            </button>
            <button
              className="search-results-pagination-button"
              type="submit"
              onClick={() => this.changePage("next")}
            >
              Next Page
            </button>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  searchItemsResults: state.searchItems,
  config: state.getConfig
});

const mapDispatchToProps = dispatch => ({
  searchItems: url => dispatch(searchItems(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
