import React from "react";
import { useSeasons } from "../hooks/useSeasons.js"
import { Season } from "../components/Season.js"
import {Header} from "../components/Header.js";
import { useDispatch } from "react-redux";
import {setPagAnterior} from "../actions/pagAntAction.js";
import { useSelector } from "react-redux";


export const SeasonsPage = () => {
    const seasons = useSeasons();
    const dispatch = useDispatch();

    console.log(window.location.href)
    console.log(window.location.pathname)

//    dispatch(setPagAnterior(window.location.pathname))
    const {pagAnterior} = useSelector(state => state.pagAntReducer);
    console.log('Página anterior: ' + pagAnterior)

    
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
