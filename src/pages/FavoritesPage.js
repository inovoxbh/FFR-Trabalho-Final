import React from "react";
import { useSelector } from "react-redux";
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";
import {SectionCSS} from "../visual/components.js"
import {removeFavorite} from "../actions/favActions";
import { useDispatch } from "react-redux";
import {UnfavButtonCSS} from "../visual/components.js"

export const FavoritesPage = () => {
    const {favSeasons} = useSelector(state => state.favoritesreducer);
    const dispatch = useDispatch();

    const temFavoritos =favSeasons.length;

    return (
        <div>
            <Header />
            <NavBar />
            <SectionCSS>
                <h2>Temporadas Favoritas</h2>
                <p>Aqui você encontra a relação de suas temporadas favoritas.</p>
                {temFavoritos > 0 ? 
                    <ul style={{ listStyleType: "none" }}>
                        {favSeasons.map((s,i) => (<li key={i}> <p> Temporada {s} <UnfavButtonCSS onClick={() => dispatch(removeFavorite(s))}>Desfavoritar</UnfavButtonCSS> </p> </li>))}
                    </ul>
                :
                    <p>Ainda não foi selecionada nenhuma temporada favorita.</p>
                }
            </SectionCSS>
            <Footer />
        </div>
    )

};
