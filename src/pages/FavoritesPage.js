import React from "react";
import { useSelector } from "react-redux";
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";


export const FavoritesPage = () => {
    const {favSeasons} = useSelector(state => state.favoritesreducer); /* extraiu apenas a propriedade favSeasons do state.favoritesreducer */

    return (
        <div>
            <Header />
            <h1>Temporadas Favoritas</h1>
            <ol>
                {favSeasons.map((favRound,i) => (<li key={i}> Season: {favRound} </li>))}
            </ol>
            <Footer />
        </div>
    )

};
