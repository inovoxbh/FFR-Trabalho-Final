import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
      <div>
        <h1>Trabalho Final</h1>
        <h2>
          <Link to="/temporadas">Temporadas</Link>
        </h2>
        <p>Trabalho final de React</p>
      </div>
    )
};
