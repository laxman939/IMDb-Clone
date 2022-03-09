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

// action to store page number
export const pageNumberAction = (nmbr) => {
  return {
    type: PAGE,
    payload: nmbr,
  };
};

export const getTrendingMovies = (movies) => {
  return {
    type: TRENDING_MOVIES,
    payload: movies,
  };
};
export const getTrendingTv = (series) => {
  return {
    type: TRENDING_TV,
    payload: series,
  };
};

export const getFavouriteMovies = (movie) => {
  return {
    type: MOVIEFAVOURITES,
    payload: movie,
  };
};

export const getFavouriteTvShows = (movie) => {
  return {
    type: TVFAVOURITES,
    payload: movie,
  };
};

export const signInClick = (status) => {
  return {
    type: ISSIGNIN,
    payload: status,
  };
};

export const getUserName = (name) => {
  return {
    type: USERNAME,
    payload: name,
  };
};
