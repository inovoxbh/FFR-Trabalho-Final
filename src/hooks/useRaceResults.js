import {useState,useEffect} from "react";
import {f1Services} from "../services/f1Services.js";

export const useRaceResults = (props) => {
    const [raceResults,setRaceResults] = useState([]);

    const getRaceResults= async () => {
      const r = await f1Services.getRaceResult(props);

      var responseRaceResults = []
      if (r.data.MRData.RaceTable.Races.length >0) {
          responseRaceResults =r.data.MRData.RaceTable.Races[0].Results;
      }
      
      setRaceResults(responseRaceResults);
    };

    useEffect(() => {
      getRaceResults();
    },[]);

    return raceResults;
};
