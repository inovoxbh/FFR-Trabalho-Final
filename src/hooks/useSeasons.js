import {useState,useEffect} from "react";
import {f1Services} from "../services/f1Services.js";

export const useSeasons = () => {
    const [seasons,setSeasons] = useState([]);

    const getSeasons = async () => {
      const s = await f1Services.getSeasons();
      const ascSeasons =s.data.MRData.SeasonTable.Seasons; // retorna temporadas em ordem crescente

      const descSeasons = [];
      ascSeasons.map((s,i) => (descSeasons[ascSeasons.length-1-i] = s.season)) // array com temporadas em ordem descendente

      console.log(descSeasons);

      setSeasons(descSeasons); // retorna o array com temporadas descendente
    };

    useEffect(() => {
        getSeasons();
    },[]);

    return seasons;
};
