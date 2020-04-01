import React from "react";

export const GridPosition = (props) => {
    return <div>
        <h2>Posição #{props.position}</h2>
        <h3>Piloto: {props.Driver.givenName + ' ' + props.Driver.familyName + ' (' + props.Driver.nationality + ')'}</h3>
        <h4>Equipe: {props.Constructor.Name}</h4>
    </div>
}
