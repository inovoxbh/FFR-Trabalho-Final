import React from "react";
import { useRounds } from "../hooks/useRounds.js"
import { Round } from "../components/Round.js"
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";


export const RoundsPage = (props) => {
    const rounds = useRounds(props.match.params.seasonid);

    return (
      <div>
        <Header />        
        <h1>Corridas</h1>
        <ul style={{ listStyleType: "none" }}>
          {rounds.map(r => (
                              <li key={r.round}>
                                  <Round round={r.round} raceName={r.raceName} date={r.date} />
                              </li>
                            ))}
        </ul>
        <Footer />
      </div>
    )

};
