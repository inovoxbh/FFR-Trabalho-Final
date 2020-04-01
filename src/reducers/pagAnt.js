import {
    SET_ANT
  } from "../actions/pagAntAction.js";
  
  export const pagAntReducer = (state = {}, action) => {
    console.log("entrou no reducer de pagina anterior")
    console.log("action do reducer: " + action.type)
    console.log("payload do reducer: " + action.payload)
    switch (action.type) {
      case SET_ANT:
          return {
            ...state,
            pagAnterior: action.payload
          };

        default:
        return state;
    }
  };
  