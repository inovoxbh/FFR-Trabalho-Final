import React from "react";
import { useSelector } from "react-redux";
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";
import {SectionCSS} from "../visual/components.js"

export const HistoryPage = () => {
    const {history} = useSelector(state => state.historyreducer);

    const temHistorico =history.length;

    return (
        <div>
            <Header />
            <NavBar />
            <SectionCSS>
                <h2>Histórico de Visitação</h2>
                <p>Aqui você encontra o histórico das temporadas que já visitou.</p>
                {temHistorico > 0 ?
                    <ol>
                        {history.map((history,i) => (<li key={i}> Temporada {history.seasonId} em {history.systemDate} </li>))}
                    </ol>
                :
                    <p>Não foi localizado nenhum histórico de navegação em temporadas.</p>
                }
            </SectionCSS>
            <Footer />
        </div>
    )

};
