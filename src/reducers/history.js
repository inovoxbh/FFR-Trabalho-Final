import {
    SET_HIS
  } from "../actions/historyActions.js";

  const initialState = {
    history: []
  };
  
  export const historyreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_HIS:
          return {
            ...state,
            history: state.history.concat(action.payload)
          };

      default:
        return state;
    }
  };
  