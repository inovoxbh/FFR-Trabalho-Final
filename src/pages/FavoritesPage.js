import React from "react";
import { useSelector } from "react-redux";
import {Header} from "../components/Header.js";

export const FavoritesPage = () => {
    const {favSeasons} = useSelector(state => state.favoritesreducer); /* extraiu apenas a propriedade favSeasons do state.favoritesreducer */

    console.log(window.location.href)
    console.log(window.location.pathname)

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
