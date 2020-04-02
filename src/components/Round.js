import React from "react";
import { Link } from "react-router-dom";

export const Round = (props) => {
    const url = `/seasons/${props.season}/rounds/${props.round}/results`
    console.log("URL do Round.js: " + url)

    return <div>
        <h2>Corrida #{props.round}</h2>
        <h3>{props.raceName}</h3>
        <p>Data {props.date}</p>
        <Link to={url}>Grid de Chegada</Link><br />
    </div>
}
