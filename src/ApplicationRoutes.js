import React from "react";
import { Route } from "react-router-dom";
import { HomePage, SeasonsPage, FavoritesPage, RoundsPage } from "./pages";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/seasons" exact component={SeasonsPage} />
    <Route path="/favorites" exact component={FavoritesPage} />
    <Route path="/seasons/:seasonid" exact component={RoundsPage} />
  </>
);