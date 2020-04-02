import React from "react";
import { useRaceResults } from "../hooks/useRaceResults.js"
import { GridPosition } from "../components/GridPosition.js"
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";


export const ResultsPage = (props) => {
    console.log("props do ResultsPage: " + props)
    const params = {
        seasonid: props.match.params.seasonid,
        roundid: props.match.params.roundid
    }
    console.log("params do ResultsPage: " + params)
    const raceResults = useRaceResults(params);

    return (
      <div>
        <Header />        
        <NavBar />
        <h2>Resultado</h2>
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
        <Footer />
      </div>
    )

};
