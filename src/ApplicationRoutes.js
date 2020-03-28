import React from "react";
import { Route } from "react-router-dom";
import { HomePage, SeasonsPage } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/seasons" exact component={SeasonsPage} />
  </>
);