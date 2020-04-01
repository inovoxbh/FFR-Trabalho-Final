import React from "react";
import { Link } from "react-router-dom";
import { useSeasons } from "../hooks/useSeasons.js"
import { Season } from "../components/Season.js"

export const SeasonsPage = () => {
    const seasons = useSeasons();
    
    return (
      <div>
        <h1>Seasons</h1>
        <h2>
          <Link to="/favorites">Favorites Seasons</Link>
        </h2>
        <ul style={{ listStyleType: "none" }}>
          {seasons.map(season => (
                              <li key={season}>
                                  <Season season={season} />
                              </li>
                            ))}
        </ul>
      </div>
    )

};
