import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const FavoritesPage = () => {
    const {favSeasons} = useSelector(state => state.favoritesreducer); /* extraiu apenas a propriedade favSeasons do state.favoritesreducer */

    return (
        <div>
            <h2>Favorites</h2>

            <ol>
                {favSeasons.map((favRound,i) => (<li key={i}> Season: {favRound} </li>))}
            </ol>

            <Link to={"/seasons"}>Seasons</Link> 
            <p></p>
            <Link to={"/"}>Home Page</Link>
        </div>
    )

};
