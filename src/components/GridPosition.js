import React from "react";

export const GridPosition = (props) => {
    return <div>
        <h2>Posição #{props.position}</h2>
        <h3>Piloto: {props.driverGivenName + ' ' + props.driverFamilyName + ' (' + props.driverNationality + ')'}</h3>
        <h4>Equipe: {props.constructorName}</h4>
    </div>
}
