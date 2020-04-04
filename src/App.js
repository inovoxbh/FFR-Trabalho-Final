import React from "react";
import { ApplicationRoutes } from "./ApplicationRoutes";
import {LayoutCSS} from "./visual/components.js"

export default function App() {
  return (
    <LayoutCSS className="App">
      <ApplicationRoutes />
    </LayoutCSS>
  );
}
