import React from "react";
import { useSeasons } from "../hooks/useSeasons.js"
import { Season } from "../components/Season.js"
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";

export const SeasonsPage = () => {
    const seasons = useSeasons();

    return (
      <div>
        <Header />                
        <NavBar />
        <h2>Temporadas</h2>
        <ul style={{ listStyleType: "none" }}>
          {seasons.map(season => (
                              <li key={season}>
                                  <Season season={season} />
                              </li>
                            ))}
        </ul>
        <Footer />
      </div>
    )

};
