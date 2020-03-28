import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={HomePage} />
  </>
);