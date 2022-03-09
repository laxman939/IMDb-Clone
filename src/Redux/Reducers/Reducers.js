import { ActionType } from "../Constants/Constants";

const {
  PAGE,
  TRENDING_MOVIES,
  MOVIEFAVOURITES,
  TVFAVOURITES,
  ISSIGNIN,
  TRENDING_TV,
  USERNAME,
} = ActionType;

export let initialState = {
  page: 1,
  trendMovies: [],
  movieFavourites: [],
  tvFavourites: [],
  isSignIn: false,
  trendTv: [],
  userName: "",
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

export function TrendingTvReducer(state = initialState, action) {
  switch (action.type) {
    case TRENDING_TV:
      return {
        ...state,
        trendTv: action.payload,
      };

    default:
      return state;
  }
}

export function FavouritesMovieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIEFAVOURITES:
      return {
        ...state,
        movieFavourites: action.payload,
      };

    default:
      return state;
  }
}

export function FavouritesTvReducer(state = initialState, action) {
  switch (action.type) {
    case TVFAVOURITES:
      return {
        ...state,
        tvFavourites: action.payload,
      };

    default:
      return state;
  }
}

export function SignInReducer(state = initialState, action) {
  switch (action.type) {
    case ISSIGNIN:
      return {
        ...state,
        isSignIn: action.payload,
      };

    default:
      return state;
  }
}

export function UserNameReducer(state = initialState, action) {
  switch (action.type) {
    case USERNAME:
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
}
