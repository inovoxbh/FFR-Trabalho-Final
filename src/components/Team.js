import React from "react";

export const Team = (props) => {
    return <div>
        <h2>Equipe: {props.name}</h2>
        <h3>Nacionalidade: {props.nationality}</h3>
    </div>
}
