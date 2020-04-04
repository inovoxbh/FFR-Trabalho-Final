import React from "react";
import { Link } from "react-router-dom";
import {LinkCSS, H2ListItemCSS} from "../visual/components.js"

export const Round = (props) => {
    const urlBase =`/seasons/${props.season}/rounds/${props.round}`
    const urlResultado =urlBase + "/results"
    const urlEquipes =urlBase + "/constructors"

    return <div>
        <H2ListItemCSS>Corrida #{props.round}</H2ListItemCSS>
        <h3>{props.raceName}</h3>
        <p>Data {props.date}</p>
        <LinkCSS><Link to={urlResultado}>Grid de Chegada</Link></LinkCSS>
        <br />
        <LinkCSS><Link to={urlEquipes}>Equipes</Link></LinkCSS>
        <br />
    </div>
}
