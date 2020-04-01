import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
      <div>
        <h1>Final Exercise</h1>
        <p>React Final Exercise</p>
        <div><Link to="/seasons">Seasons</Link></div>
      </div>
    )
};
