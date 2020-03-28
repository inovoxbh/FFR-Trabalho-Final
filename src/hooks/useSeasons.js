import {useState,useEffect} from "react";
import {f1Services} from "../services/f1Services.js";

export const useSeasons = () => {
    const [seasons,setSeasons] = useState([]);

    const getSeasons = async () => {
      const seasonsResults = await f1Services.getSeasons();

      const arraylength =seasonsResults.length;

      console.log(arraylength);

      setSeasons(seasonsResults.data.MRData.SeasonTable.Seasons);
    };

    useEffect(() => {
        getSeasons();
    },[]);

    return seasons;
};
