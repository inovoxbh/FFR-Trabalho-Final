import React from "react";
import { Link } from "react-router-dom";

export const Round = (props) => {
    const urlBase =`/seasons/${props.season}/rounds/${props.round}`
    const urlResultado =urlBase + "/results"
    const urlEquipes =urlBase + "/constructors"

    return <div>
        <h2>Corrida #{props.round}</h2>
        <h3>{props.raceName}</h3>
        <p>Data {props.date}</p>
        <Link to={urlResultado}>Grid de Chegada</Link>
        <br />
        <Link to={urlEquipes}>Construtores</Link>
        <br />
    </div>
}
