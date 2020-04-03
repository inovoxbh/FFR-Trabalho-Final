import {
    SET_ROU
  } from "../actions/roundsActions.js";

  const initialState = {
    rounds: []
  };
  
  export const roundsreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ROU:
          return {
            ...state,
            rounds: action.payload
          };

      default:
        return state;
    }
  };
  