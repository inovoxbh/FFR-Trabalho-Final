import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage, SeasonsPage, FavoritesPage, RoundsPage } from "./components";

export const ApplicationRoutes = () => (
  <>
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/seasons" exact component={SeasonsPage} />
      <Route path="/favorites" exact component={FavoritesPage} />
      <Route path="/season/:seasonid" exact component={RoundsPage} />
    </BrowserRouter>
  </>
);