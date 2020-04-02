import React from "react";
import { Route } from "react-router-dom";
import { HomePage, SeasonsPage, FavoritesPage, RoundsPage, ResultsPage, TeamsPage } from "./pages";

export const ApplicationRoutes = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/seasons" component={SeasonsPage} />
    <Route exact path="/favorites" component={FavoritesPage} />
    <Route exact path="/seasons/:seasonid/rounds" component={RoundsPage} />
    <Route exact path="/seasons/:seasonid/rounds/:roundid/results" component={ResultsPage} />
    <Route exact path="/seasons/:seasonid/rounds/:roundid/constructors" component={TeamsPage} />
  </>
);