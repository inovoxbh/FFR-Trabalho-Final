import React from "react";
import {H2ListItemCSS} from "../visual/components.js"

export const Team = (props) => {
    return <div>
        <H2ListItemCSS>Equipe: {props.name}</H2ListItemCSS>
        <h3>Nacionalidade: {props.nationality}</h3>
    </div>
}
