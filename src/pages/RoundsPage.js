import React from "react";
import { useRounds } from "../hooks/useRounds.js"
import { Round } from "../components/Round.js"
import {Header} from "../components/Header.js";
import { useDispatch } from "react-redux";
import {setPagAnterior} from "../actions/pagAntAction.js";
import { useSelector } from "react-redux";
import {useEffect} from "react";

export const RoundsPage = (props) => {
    const rounds = useRounds(props.match.params.seasonid);
    const dispatch = useDispatch();

    const {pagAnterior} = useSelector(state => state.pagAntReducer);
    console.log('Página anterior: ' + pagAnterior)
    useEffect(() => {
      dispatch(setPagAnterior(window.location.pathname))
    },[]);

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
      </div>
    )

};
