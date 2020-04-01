import {useState,useEffect} from "react";
import {f1Services} from "../services/f1Services.js";

export const useRounds = (props) => {
    const [rounds,setRounds] = useState([]);

    const getRounds= async () => {
      const r = await f1Services.getRounds(props);
      
      const responseRounds =r.data.MRData.RaceTable.Races;

      setRounds(responseRounds);
    };

    useEffect(() => {
        getRounds();
    },[props]);

    return rounds;
};
