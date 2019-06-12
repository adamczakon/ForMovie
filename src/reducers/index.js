import { combineReducers } from "redux";
import getMoviesUpcoming from "./getMoviesUpcoming";
import getMoviesLatest from "./getMoviesLatest";
import getMoviesNowPlaying from "./getMoviesNowPlaying";
import getMovieDetails from "./getMovieDetails";
import getMoviesPopular from "./getMoviesPopular";
import getMovieTrailers from "./getMovieTrailers";
import getMovieCredits from "./getMovieCredits";
import getMovieReviews from "./getMovieReviews";
import getConfig from "./getConfig";
import searchItems from "./searchItems";

export default combineReducers({
  getMoviesUpcoming,
  getMoviesLatest,
  getMoviesNowPlaying,
  getMoviesPopular,
  getMovieDetails,
  getMovieTrailers,
  getMovieCredits,
  getMovieReviews,
  searchItems,
  getConfig
});
