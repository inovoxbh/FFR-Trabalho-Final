import React from "react";
import { useRounds } from "../hooks/useRounds.js"
import { Round } from "../components/Round.js"
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";


export const RoundsPage = (props) => {
    const season =props.match.params.seasonid;
    const rounds = useRounds(season);

    console.log("RoundsPage")

    return (
      <div>
        <Header />        
        <NavBar />
        <h2>Corridas da temporada {season} </h2>
        <ul style={{ listStyleType: "none" }}>
          {rounds.map(r => (
                              <li key={r.round}>
                                  <Round round={r.round} raceName={r.raceName} date={r.date} season={season} />
                              </li>
                            ))}
        </ul>
        <Footer />
      </div>
    )

};
