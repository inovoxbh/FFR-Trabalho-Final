import React from "react";
import { Link } from "react-router-dom";
import {setFavorite, removeFavorite} from "../actions/favActions";
import { useDispatch } from "react-redux";
import { useSeasons } from "../hooks/useSeasons.js"

export const SeasonsPage = () => {
    const seasons = useSeasons();
    
    const dispatch = useDispatch();

    return (
      <div>
        <h1>Seasons</h1>
        <h2>
          <Link to="/favorites">Favorites Seasons</Link>
        </h2>
        <ul style={{ listStyleType: "none" }}>
          {seasons.map(s => (
                              <li key={s.season}>
                                  <Link to={`/${s.season}`}>{s.season}</Link>
                                  <button onClick={() => dispatch(setFavorite(s))}>Favorite</button>
                                  <button onClick={() => dispatch(removeFavorite(s))}>Unfavorite</button>
                              </li>
                            ))}
        </ul>
      </div>
    )

};
