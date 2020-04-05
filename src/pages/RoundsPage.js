import React from "react";
import { useRounds } from "../hooks/useRounds.js"
import { Round } from "../components/Round.js"
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";
import {setRounds} from "../actions/roundsActions";
import {setHistory} from "../actions/historyActions";
import { useDispatch } from "react-redux";
import {useEffect} from "react";

export const RoundsPage = (props) => {
    const season =props.match.params.seasonid;
    const rounds = useRounds(season);
    const dispatch = useDispatch();

    /* armazena no estado todas as corridas da temporada */
    if (rounds.length >0) {
      dispatch(setRounds(rounds))
    }

    useEffect(() => {
        /* data/hora atual */
        let sysDate = new Date();
        let diasSemana = ['domingo','segunda','terça','quarta','quinta','sexta','sábado']

        /* armazena temporada no histórico de temporadas visitadas */
        const history = {
            seasonId: season,
            systemDate: diasSemana[sysDate.getDay()] + ", " + 
                        sysDate.getDate() + "/" + (sysDate.getMonth()+1) + "/" + sysDate.getFullYear() + " às " + 
                        sysDate.getHours() + ":" + sysDate.getMinutes() + ":" + sysDate.getSeconds() + ":" + sysDate.getMilliseconds()
        }
        dispatch(setHistory(history))
    },[]);

    return (
      <div>
        <Header />        
        <NavBar />
        <h2>Corridas da temporada {season} </h2>
        <p>Clique nas opções abaixo para visualizar o grid de chegada e as equipes.</p>
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
