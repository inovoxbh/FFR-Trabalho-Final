import React from "react";
import { useRounds } from "../hooks/useRounds.js"
import { Round } from "./Round.js"

export const RoundsPage = (props) => {
    console.log("antesuseRounds")
    const rounds = useRounds(props.match.params.seasonid);
    console.log("aposuseRounds")

    console.log("conteudo_do_props")
    console.log(props)
    
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
