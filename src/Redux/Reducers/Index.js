import { combineReducers } from "redux";

import TrendingMoviesReducer, {
  FavouritesMovieReducer,
  FavouritesTvReducer,
  PageNumber,
  SignInReducer,
  TrendingTvReducer,
  UserNameReducer,
} from "./Reducers";

const Reducer = combineReducers({
  Page: PageNumber,
  TrendMovies: TrendingMoviesReducer,
  TrendTv: TrendingTvReducer,
  MovieFavourites: FavouritesMovieReducer,
  TvFavourites: FavouritesTvReducer,
  IsSignIn: SignInReducer,
  UserName: UserNameReducer,
});
export default Reducer;
