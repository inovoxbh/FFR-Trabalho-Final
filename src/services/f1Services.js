import axios from "axios";

export class f1Services {
    static limitPerPage = 71;
    
    static _withBaseUrl(path) {
        return `https://ergast.com/api/f1/${path}`;
    }

    static getSeasons() {
        return axios(f1Services._withBaseUrl(`seasons.json?limit=${f1Services.limitPerPage}`));
    }

    static getRounds(props) {
        return axios(f1Services._withBaseUrl(`${props}.json`));
    }

    static getRaceResult(props) {
        return axios(f1Services._withBaseUrl(`${props.seasonid}/${props.roundid}/results.json`));
    }

    static getTeams(props) {
        return axios(f1Services._withBaseUrl(`${props.seasonid}/${props.roundid}/constructors.json`));
    }
}
