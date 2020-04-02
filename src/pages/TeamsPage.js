import React from "react";
import { useTeams } from "../hooks/useTeams.js"
import { Team } from "../components/Team.js"
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";
import { Link } from "react-router-dom";


export const TeamsPage = (props) => {
    const paramsUrl = {
        seasonid: props.match.params.seasonid,
        roundid: props.match.params.roundid
    }

    const teams = useTeams(paramsUrl);
    const temTeams =teams.length;

    return (
      <div>
        <Header />        
        <NavBar />
        <Link to={`/seasons/${paramsUrl.seasonid}/rounds`}>Temporada {paramsUrl.seasonid}</Link>
        <h2>Equipes</h2>
        {temTeams > 0 ? 
            <ul style={{ listStyleType: "none" }}>
              {teams.map(r => (
                                  <li key={r.constructorId}>
                                    <Team
                                        name={r.name}
                                        nationality={r.nationality}
                                    />
                                  </li>
                                ))}
            </ul>
            :
            <p>Não foram localizadas equipes para a corrida {paramsUrl.roundid} na temporada {paramsUrl.seasonid}.</p>
        }
        <Footer />
      </div>
    )

};
