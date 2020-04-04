import React from "react";
import { Link } from "react-router-dom";
import {LinkCSS, NavBarCSS} from "../visual/components.js"

export const NavBar = () => {
    return <NavBarCSS>
        <ul>
            <li><LinkCSS><Link to="/">Página Inicial</Link><br /></LinkCSS></li>
            <li><LinkCSS><Link to="/seasons">Todas Temporadas</Link><br /></LinkCSS></li>
            <li><LinkCSS><Link to="/favorites">Temporadas Favoritas</Link><br /></LinkCSS></li>
            <li><LinkCSS><Link to="/history">Histórico Visitação</Link><br /></LinkCSS></li>
        </ul>
    </NavBarCSS>
}
