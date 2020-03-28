export const SET_FAV = "SET_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const setFavorite = (round) => ({
  type: SET_FAV,
  payload: round
});

export const removeFavorite = (round) => ({
  type: REMOVE_FAV,
  payload: round
});
