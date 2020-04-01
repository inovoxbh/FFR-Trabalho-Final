import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setFavorite, removeFavorite} from "../actions/favActions";

export const Season = ( {season} ) => {
    const dispatch = useDispatch();
    
    return <div>
        <p>
            <Link to={`/seasons/${season}`}>Temporada {season}</Link>
            <button onClick={() => dispatch(setFavorite(season))}>Favorite</button>
            <button onClick={() => dispatch(removeFavorite(season))}>Unfavorite</button>
        </p>
    </div>
}