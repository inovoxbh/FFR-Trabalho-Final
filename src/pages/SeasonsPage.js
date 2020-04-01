import React from "react";
import { useSeasons } from "../hooks/useSeasons.js"
import { Season } from "../components/Season.js"
import {Header} from "../components/Header.js";

export const SeasonsPage = () => {
    const seasons = useSeasons();
    
    return (
      <div>
        <Header />                
        <h1>Temporadas</h1>
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
