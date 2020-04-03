import { combineReducers } from "redux";
import { favoritesreducer } from "./favorites.js";
import { roundsreducer } from "./rounds.js";
import { historyreducer } from "./history.js";

export const reducers = combineReducers({
    favoritesreducer,
    roundsreducer,
    historyreducer
});
