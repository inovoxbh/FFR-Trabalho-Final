import axios from "axios";

export class f1Services {
    static limitPerPage = 71;
    
    static _withBaseUrl(path) {
        return `http://ergast.com/api/f1/${path}`;
    }

    static getSeasons() {
        return axios(f1Services._withBaseUrl(`seasons.json?limit=${f1Services.limitPerPage}`));
    }

    static getRounds(props) {
        return axios(f1Services._withBaseUrl(`${props}.json`));
    }

    static getRaceResult(props) {
        return axios(f1Services._withBaseUrl(`${props.season}/${props.round}/results.json`));
    }

    static getTeams(props) {
        return axios(f1Services._withBaseUrl(`${props.season}/${props.round}/constructors.json`));
    }
}
