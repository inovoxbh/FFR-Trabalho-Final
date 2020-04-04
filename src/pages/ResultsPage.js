import React from "react";
import { useRaceResults } from "../hooks/useRaceResults.js"
import { GridPosition } from "../components/GridPosition.js"
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {LinkCSS} from "../visual/components.js"

export const ResultsPage = (props) => {
    const paramsUrl = {
        seasonid: props.match.params.seasonid,
        roundid: props.match.params.roundid
    }
    let raceName

    /* recupera o array de corridas da store */
    const {rounds} = useSelector(state => state.roundsreducer);
    if (rounds.length >0)
        raceName =" da corrida " + rounds[paramsUrl.roundid-1].raceName
    else
        raceName =""

    const raceResults = useRaceResults(paramsUrl);
    const temResultados =raceResults.length;

    return (
      <div>
        <Header />        
        <NavBar />
        <LinkCSS><Link to={`/seasons/${paramsUrl.seasonid}/rounds`}>Temporada {paramsUrl.seasonid}</Link></LinkCSS>
        <h2>Resultado {raceName}</h2>
        {temResultados > 0 ? 
            <ul style={{ listStyleType: "none" }}>
              {raceResults.map(r => (
                                  <li key={r.position}>
                                    <GridPosition
                                        position={r.position}
                                        driverGivenName={r.Driver.givenName}
                                        driverFamilyName={r.Driver.familyName}
                                        driverNationality={r.Driver.nationality}
                                        constructorName={r.Constructor.name}
                                    />
                                  </li>
                                ))}
            </ul>
            :
            <p>Não foram localizados resultados para a corrida {paramsUrl.roundid} na temporada {paramsUrl.seasonid}.</p>
        }
        <Footer />
      </div>
    )

};
