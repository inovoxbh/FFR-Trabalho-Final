import axios from "axios";

export class f1Services {
    static limitPerPage = 71;
    
    static _withBaseUrl(path) {
        return `http://ergast.com/api/f1/${path}?limit=${f1Services.limitPerPage}`;
    }

    static getSeasons() {
        return axios(f1Services._withBaseUrl("seasons.json"));
    }

    static getRounds() {
        return axios("http://ergast.com/api/f1/2019.json");
    }

    // static getMovieById(movieId) {
    //     return axios(f1Services._withBaseUrl(`movie/${movieId}`));
    // }
}
