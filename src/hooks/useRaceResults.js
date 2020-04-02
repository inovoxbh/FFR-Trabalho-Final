import {useState,useEffect} from "react";
import {f1Services} from "../services/f1Services.js";

export const useRaceResults = (props) => {
    const [raceResults,setRaceResults] = useState([]);

    const getRaceResults= async () => {
      const r = await f1Services.getRaceResult(props);
      
      const responseRaceResults =r.data.MRData.RaceTable.Races.Results;

      setRaceResults(responseRaceResults);
    };

    useEffect(() => {
      getRaceResults();
    },[props]);

    return raceResults;
};
