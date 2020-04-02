import {useState,useEffect} from "react";
import {f1Services} from "../services/f1Services.js";

export const useRaceResults = (props) => {
    const [raceResults,setRaceResults] = useState([]);

    const getRaceResults= async () => {
      const r = await f1Services.getRaceResult(props);

      var responseRaceResults = []
      if (r.data.MRData.RaceTable.Races.length >0) {
          console.log("tem corrida")
          responseRaceResults =r.data.MRData.RaceTable.Races[0].Results;
      } else {
          console.log("NÃO tem corrida")
      }

      setRaceResults(responseRaceResults);
    };

    useEffect(() => {
      getRaceResults();
    },[]);

    return raceResults;
};
