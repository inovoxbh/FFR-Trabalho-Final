export const SET_FAV = "SET_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const setFavorite = (season) => ({
  type: SET_FAV,
  payload: season
});

export const removeFavorite = (season) => ({
  type: REMOVE_FAV,
  payload: season
});
