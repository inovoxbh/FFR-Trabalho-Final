import React from "react";
import { useRounds } from "../hooks/useRounds.js"
import { Round } from "./Round.js"

export const RoundsPage = (props) => {
    console.log(props.match.params.seasonid)
    const rounds = useRounds(props.match.params.seasonid);
    console.log(rounds)
    
    return (
      <div>
        <h1>Corridas</h1>
        <ul style={{ listStyleType: "none" }}>
          {rounds.map(r => (
                              <li key={r.round}>
                                  <Round round={r.round} raceName={r.raceName} date={r.date} />
                              </li>
                            ))}
        </ul>
      </div>
    )

};
