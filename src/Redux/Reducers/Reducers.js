import { ActionType } from "../Constants/consants";

const { PAGE, TRENDING, FAVOURITES } = ActionType;

export let initialState = {
  page: 1,
  trending: [],
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

export default function GetTrendingReducer(state = initialState, action) {
  switch (action.type) {
    case TRENDING:
      return {
        ...state,
        trending: action.payload,
      };

    default:
      return state;
  }
}

export function GetFavouritesReducer(state = initialState, action) {
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
