import {
    SET_ANT
  } from "../actions/pagAntAction.js";
  
  const initialState = {
    pagAnterior: {}
  };
  
  export const pagAntReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ANT:
          return {
            ...state,
            favSeasons: action.payload
          };

        default:
        return state;
    }
  };
  