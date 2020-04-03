import React from "react";
import { useSelector } from "react-redux";
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";


export const HistoryPage = () => {
    const {history} = useSelector(state => state.historyreducer);

    return (
        <div>
            <Header />
            <NavBar />
            <h2>Histórico de Visitação</h2>
            <ol>
                {history.map((history,i) => (<li key={i}> Temporada {history.seasonId} em {history.systemDate} </li>))}
            </ol>
            <Footer />
        </div>
    )

};
