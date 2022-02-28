import { ActionType } from "../Constants/Constants";

const { PAGE, TRENDING_MOVIES, FAVOURITES } = ActionType;

export let initialState = {
  page: 1,
  trendMovies: [],
  favourites: [],
};

export const PageNumber = (state = initialState, action) => {
  switch (action.type) {
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default function TrendingMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case TRENDING_MOVIES:
      return {
        ...state,
        trendMovies: action.payload,
      };

    default:
      return state;
  }
}

export function FavouriteMovieReducer(state = initialState, action) {
  switch (action.type) {
    case FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
      };

    default:
      return state;
  }
}
