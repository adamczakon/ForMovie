import React, { Component } from "react";
import { connect } from "react-redux";

import TrailersList from "./TrailersList";
import CastList from "./CastList";
import Reviews from "./Reviews";
import Spinner from "./Spinner";

import getMovieDetails from "../actions/getMovieDetails";
import getMovieTrailers from "../actions/getMovieTrailers";
import getMovieCredits from "../actions/getMovieCredits";
import getMovieReviews from "../actions/getMovieReviews";

import starIcon from "../image/starIcon.svg";

class MovieDetails extends Component {
  componentDidMount() {
    //scroll to top
    window.scrollTo(0, 0);

    this.props.getMovieDetails(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    this.props.getMovieTrailers(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    this.props.getMovieCredits(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    this.props.getMovieReviews(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
  }

  render() {
    if (this.props.movieTrailers.results.length === 0) {
      return <Spinner />;
    } else {
      return (
        <div className='movie-details'>
          <div
            className='movie-details-banner'
            style={{
              background: `linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 1)
            ), url(${
              this.props.config.images
                ? this.props.config.images.secure_base_url
                : ""
            }${
                this.props.config.images
                  ? this.props.config.images.backdrop_sizes[2]
                  : ""
              }${this.props.movieDetails.backdrop_path}) center top no-repeat`,
              backgroundSize: "cover, cover"
            }}
          >
            <div className='movie-details-banner-header'>
              <img
                className='movie-details-banner-header-image'
                src={
                  this.props.config.images
                    ? this.props.config.images.secure_base_url +
                      this.props.config.images.poster_sizes[0] +
                      `${
                        this.props.movieDetails
                          ? this.props.movieDetails.poster_path
                          : ""
                      }`
                    : ""
                }
                alt={
                  this.props.movieDetails ? this.props.movieDetails.title : ""
                }
              />
              <div className='movie-details-banner-header-info'>
                <h1 className='movie-details-banner-header-info-title'>
                  {this.props.movieDetails ? this.props.movieDetails.title : ""}
                </h1>
                <h3 className='movie-details-banner-header-info-genre'>
                  {this.props.movieDetails.genres
                    ? `${
                        this.props.movieDetails.genres[0]
                          ? this.props.movieDetails.genres[0].name
                          : ""
                      }` +
                      `${
                        this.props.movieDetails.genres[1]
                          ? " | " + this.props.movieDetails.genres[1].name
                          : ""
                      }`
                    : ""}
                </h3>
                <h3 className='movie-details-banner-header-info-production'>
                  {this.props.movieDetails.production_countries
                    ? `${
                        this.props.movieDetails.production_countries[0]
                          ? this.props.movieDetails.production_countries[0].name
                          : ""
                      }` +
                      `${
                        this.props.movieDetails.production_countries[1]
                          ? " | " +
                            this.props.movieDetails.production_countries[1].name
                          : ""
                      }`
                    : ""}
                </h3>
                <div className='movie-details-banner-header-info-score'>
                  <img
                    className='movie-details-banner-header-info-score-icon'
                    src={starIcon}
                    alt='Rating:'
                  />
                  <div className='movie-details-banner-header-info-score-numbers'>
                    <h3 className='movie-details-banner-header-info-score-numbers-rating'>
                      {this.props.movieDetails.vote_average}/10
                    </h3>
                    <h3 className='movie-details-banner-header-info-score-numbers-votes'>
                      {this.props.movieDetails.vote_count} votes
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='movie-details-main'>
            <div className='movie-details-main-storyline box'>
              <h1 className='movie-details-main-storyline-title header'>
                Storyline
              </h1>
              <p className='movie-details-main-storyline-text'>
                {this.props.movieDetails.overview
                  ? `${
                      this.props.movieDetails.overview.length > 0
                        ? this.props.movieDetails.overview
                        : "Storyline not found."
                    }`
                  : ""}
              </p>
            </div>
            <div className='movie-details-main-trailers box'>
              <h1 className='movie-details-main-trailers-header header'>
                Trailers
              </h1>
              {this.props.movieTrailers.results.length > 0 ? (
                <TrailersList items={this.props.movieTrailers.results} />
              ) : (
                <h3 className='item-details-main-trailers__error'>
                  There are no trailers avaible
                </h3>
              )}
            </div>

            <div className='movie-details-main-cast box'>
              <h1 className='movie-details-main-cast-header header'>
                Starring
              </h1>
              {this.props.movieTrailers.results.length > 0 ? (
                <CastList
                  backdrop_path={
                    this.props.movieDetails
                      ? this.props.movieDetails.backdrop_path
                      : ""
                  }
                  people={
                    this.props.movieCredits.cast
                      ? this.props.movieCredits.cast
                      : ""
                  }
                  config={this.props.config}
                />
              ) : (
                <h3 className='item-details-main-trailers-error'>
                  There are no trailers avaible
                </h3>
              )}
            </div>

            <div className='movie-details-main-reviews box'>
              <h1 className='movie-details-main-cast-header header'>Reviews</h1>
              {this.props.movieReviews.results.length > 0 ? (
                <Reviews
                  reviews={
                    this.props.movieReviews.results
                      ? this.props.movieReviews.results
                      : ""
                  }
                />
              ) : (
                <h3 className='item-details-main-trailers__error'>
                  There are no reviews for this movie.
                </h3>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  movieDetails: state.getMovieDetails,
  movieTrailers: state.getMovieTrailers,
  movieCredits: state.getMovieCredits,
  movieReviews: state.getMovieReviews,
  config: state.getConfig
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: url => dispatch(getMovieDetails(url)),
  getMovieTrailers: url => dispatch(getMovieTrailers(url)),
  getMovieCredits: url => dispatch(getMovieCredits(url)),
  getMovieReviews: url => dispatch(getMovieReviews(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
