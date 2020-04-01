import React from "react";
import { useSelector } from "react-redux";
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";


export const FavoritesPage = () => {
    const {favSeasons} = useSelector(state => state.favoritesreducer); /* extraiu apenas a propriedade favSeasons do state.favoritesreducer */

    return (
        <div>
            <Header />
            <NavBar />
            <h2>Temporadas Favoritas</h2>
            <ol>
                {favSeasons.map((favRound,i) => (<li key={i}> Season: {favRound} </li>))}
            </ol>
            <Footer />
        </div>
    )

};
