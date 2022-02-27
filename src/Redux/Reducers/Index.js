import { combineReducers } from "redux";

import GetTrendingReducer, {
  GetFavouritesReducer,
  PageNumber,
} from "./Reducers";

const Reducer = combineReducers({
  Page: PageNumber,
  Trending: GetTrendingReducer,
  Favourites: GetFavouritesReducer,
});
export default Reducer;
