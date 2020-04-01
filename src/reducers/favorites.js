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
        /* verifica se a temporada já foi inserida como favorita */
        var tempFav
        state.favSeasons.includes(action.payload) ? tempFav =1 : tempFav =0
        if (tempFav ===0) {
          return {
            ...state,
            favSeasons: state.favSeasons.concat(action.payload)
          };
        }
        else {
          return {
            ...state
          }
        }
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
  