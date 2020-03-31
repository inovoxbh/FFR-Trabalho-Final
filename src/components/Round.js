import React from "react";

export const Round = (props) => {
    return <div>
        <p>Corrida #{props.round}</p>
        <p>Circuito{props.raceName}</p>
        <p>Data {props.date}</p>
    </div>
}
