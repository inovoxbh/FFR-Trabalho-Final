import React from "react";

export const Round = (props) => {
    return <div>
        <h2>Corrida #{props.round}</h2>
        <h3>{props.raceName}</h3>
        <p>Data {props.date}</p>
    </div>
}
