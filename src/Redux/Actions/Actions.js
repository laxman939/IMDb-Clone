import { ActionType } from "../Constants/Constants";

const { PAGE, TRENDING_MOVIES, FAVOURITES } = ActionType;

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

export const getFavoriteMovie = (movie) => {
  return {
    type: FAVOURITES,
    payload: movie,
  };
};
