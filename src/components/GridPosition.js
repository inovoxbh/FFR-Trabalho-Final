import React from "react";
import {H2ListItemCSS} from "../visual/components.js"

export const GridPosition = (props) => {
    return <div>
        <H2ListItemCSS>Posição #{props.position}</H2ListItemCSS>
        <h3>Piloto: {props.driverGivenName + ' ' + props.driverFamilyName + ' (' + props.driverNationality + ')'}</h3>
        <h4>Equipe: {props.constructorName}</h4>
    </div>
}
