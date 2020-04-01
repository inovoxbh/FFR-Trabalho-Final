import { combineReducers } from "redux";
import { favoritesreducer } from "./favorites.js";
import { pagAntReducer } from "./pagAnt.js";

export const reducers = combineReducers({
    favoritesreducer,
    pagAntReducer
});
