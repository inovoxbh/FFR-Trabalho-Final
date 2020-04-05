import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setFavorite, removeFavorite} from "../actions/favActions";
import {LinkCSS, SeasonCSS, FavButtonCSS, UnfavButtonCSS} from "../visual/components.js"
import { useSelector } from "react-redux";


export const Season = ( {season} ) => {
    const dispatch = useDispatch();
    const {favSeasons} = useSelector(state => state.favoritesreducer);
    
    const temFavoritos =favSeasons.length;
    let ehFavorita =0;

    /* verifica se a temporada é favorita */
    if (temFavoritos >0) {
        favSeasons.map(f => {
            if (f === season)
                return ehFavorita =1;
            return ehFavorita
        })
    }
    
    return <SeasonCSS>
        <LinkCSS><Link to={`/seasons/${season}/rounds`}>Temporada {season}</Link></LinkCSS>
        {ehFavorita === 0 ? 
            <FavButtonCSS onClick={() => dispatch(setFavorite(season))}>Favoritar</FavButtonCSS>
        :
            <UnfavButtonCSS onClick={() => dispatch(removeFavorite(season))}>Desfavoritar</UnfavButtonCSS>
        }
    </SeasonCSS>
}