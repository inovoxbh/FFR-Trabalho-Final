import {
    SET_ROU
  } from "../actions/roundsActions.js";

  const initialState = {
    rounds: []
  };
  
  export const roundsreducer = (state = initialState, action) => {
    console.log("action payload")
    console.log(action.payload)
    console.log("action type")
    console.log(action.type)

    switch (action.type) {
      case SET_ROU:
          return {
            ...state,
            rounds: state.rounds.concat(action.payload)
          };

      default:
        return state;
    }
  };
  