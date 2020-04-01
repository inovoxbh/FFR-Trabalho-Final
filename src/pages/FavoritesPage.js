import React from "react";
import { useSelector } from "react-redux";
import {Header} from "../components/Header.js";
import { useDispatch } from "react-redux";
import {setPagAnterior} from "../actions/pagAntAction.js";
import {useEffect} from "react";

export const FavoritesPage = () => {
    const {favSeasons} = useSelector(state => state.favoritesreducer); /* extraiu apenas a propriedade favSeasons do state.favoritesreducer */
    const dispatch = useDispatch();

    const {pagAnterior} = useSelector(state => state.pagAntReducer);
    console.log('Página anterior: ' + pagAnterior)
    useEffect(() => {
      dispatch(setPagAnterior(window.location.pathname))
    },[]);

    return (
        <div>
            <Header />
            <h1>Temporadas Favoritas</h1>
            <ol>
                {favSeasons.map((favRound,i) => (<li key={i}> Season: {favRound} </li>))}
            </ol>
        </div>
    )

};
