import React from "react";
import { useRaceResults } from "../hooks/useRaceResults.js"
import { GridPosition } from "../components/GridPosition.js"
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";


export const ResultsPage = (props) => {
    const paramsUrl = {
        seasonid: props.match.params.seasonid,
        roundid: props.match.params.roundid
    }

    const raceResults = useRaceResults(paramsUrl);
    const temResultados =raceResults.length;

    return (
      <div>
        <Header />        
        <NavBar />
        <h2>Resultado</h2>
        {temResultados > 0 ? 
            <ul style={{ listStyleType: "none" }}>
              {raceResults.map(r => (
                                  <li key={r.position}>
                                    <GridPosition
                                        position={r.position}
                                        driverGivenName={r.Driver.givenName}
                                        driverFamilyName={r.Driver.familyName}
                                        driverNationality={r.Driver.nationality}
                                        constructorName={r.Constructor.Name}
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
