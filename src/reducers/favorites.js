import {
    SET_FAV,
    REMOVE_FAV
  } from "../actions/favActions.js";
  
  const initialState = {
    favSeasons: []
  };
  
  export const favoritesreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FAV:
        return {
          ...state,
          favSeasons: state.favSeasons.concat(action.payload)
        };
      case REMOVE_FAV:
        return {
          ...state,
          favSeasons: state.favSeasons.filter(season => {
              if (season !== action.payload)
                return true;
              
              return false;
          })
        };
      default:
        return state;
    }
  };
  