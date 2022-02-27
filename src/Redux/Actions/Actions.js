import { ActionType } from "../Constants/consants";

const { PAGE, TRENDING, FAVOURITES } = ActionType;

// action to store page number
export const pageNumberAction = (nmbr) => {
  return {
    type: PAGE,
    payload: nmbr,
  };
};

export const getTrendingAction = (movies) => {
  return {
    type: TRENDING,
    payload: movies,
  };
};

export const getFavoritesAction = (movie) => {
  return {
    type: FAVOURITES,
    payload: movie,
  };
};
