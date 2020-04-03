import { combineReducers } from "redux";
import { favoritesreducer } from "./favorites.js";
import { roundsreducer } from "./rounds.js";

export const reducers = combineReducers({
    favoritesreducer,
    roundsreducer
});
