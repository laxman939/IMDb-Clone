import { combineReducers } from "redux";

import TrendingMoviesReducer, {
  FavouriteMovieReducer,
  PageNumber,
} from "./Reducers";

const Reducer = combineReducers({
  Page: PageNumber,
  TrendMovies: TrendingMoviesReducer,
  Favourites: FavouriteMovieReducer,
});
export default Reducer;
