import {
    SET_FAV,
    REMOVE_FAV
  } from "../actions/favActions.js";
  
  const initialState = {
    favRounds: []
  };
  
  export const favoritesreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FAV:
        return {
          ...state,
          favRounds: state.favRounds.concat(action.payload)
        };
      case REMOVE_FAV:
        return {
          ...state,
          favRounds: state.favRounds.filter(round => {
              if (round.id !== action.payload.id)
                return true;
              
              return false;
          })
        };
      default:
        return state;
    }
  };
  