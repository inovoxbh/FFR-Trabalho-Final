import React from "react";
import { useRounds } from "../hooks/useRounds.js"
import { Round } from "../components/Round.js"
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";
import {setRounds} from "../actions/roundsActions";
import { useDispatch } from "react-redux";

export const RoundsPage = (props) => {
    const season =props.match.params.seasonid;
    const rounds = useRounds(season);
    const dispatch = useDispatch();

    console.log("RoundsPage")
    console.log(rounds)

    /* armazena no estado todas as corridas que estão sendo carregadas */
    if (rounds.length >0) {
        dispatch(setRounds(rounds))
        console.log("armazenou corridas na store")
    }

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
