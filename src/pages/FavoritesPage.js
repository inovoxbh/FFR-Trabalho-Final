import React from "react";
import { useSelector } from "react-redux";
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";
import {SectionCSS} from "../visual/components.js"


export const FavoritesPage = () => {
    const {favSeasons} = useSelector(state => state.favoritesreducer);

    const temFavoritos =favSeasons.length;

    return (
        <div>
            <Header />
            <NavBar />
            <SectionCSS>
                <h2>Temporadas Favoritas</h2>
                {temFavoritos > 0 ? 
                    <ul style={{ listStyleType: "none" }}>
                        {favSeasons.map((favRound,i) => (<li key={i}> Temporada {favRound} </li>))}
                    </ul>
                :
                    <p>Ainda não foi selecionada nenhuma temporada favorita.</p>
                }
            </SectionCSS>
            <Footer />
        </div>
    )

};
