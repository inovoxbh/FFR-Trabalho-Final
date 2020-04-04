import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setFavorite, removeFavorite} from "../actions/favActions";
import {LinkCSS, SeasonCSS} from "../visual/components.js"

export const Season = ( {season} ) => {
    const dispatch = useDispatch();
    
    return <SeasonCSS>
        <LinkCSS><Link to={`/seasons/${season}/rounds`}>Temporada {season}</Link></LinkCSS>
        <button onClick={() => dispatch(setFavorite(season))}>Favoritar</button>
        <button onClick={() => dispatch(removeFavorite(season))}>Desfavoritar</button>
    </SeasonCSS>
}