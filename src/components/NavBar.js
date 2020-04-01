import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return <div>
        <Link to="/">Página Inicial</Link><br />
        <Link to="/seasons">Todas Temporadas</Link><br />
        <Link to="/favorites">Temporadas Favoritas</Link><br />
    </div>
}
