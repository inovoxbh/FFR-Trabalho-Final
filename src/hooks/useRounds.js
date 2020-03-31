import {useState,useEffect} from "react";
import {f1Services} from "../services/f1Services.js";

export const useRounds = () => {
    const [rounds,setRounds] = useState([]);

    const getRounds= async () => {
      const r = await f1Services.getRounds();
      const responseRounds =r.data.MRData.RaceTable.Races;

      console.log(responseRounds);

      setRounds(responseRounds);
    };

    useEffect(() => {
        getRounds();
    },[]);

    return rounds;
};
