import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return <div>
        <Link to="/">Página Inicial</Link>
        <Link to="/seasons">Todas Temporadas</Link>
        <Link to="/favorites">Temporadas Favoritas</Link>
    </div>
}
