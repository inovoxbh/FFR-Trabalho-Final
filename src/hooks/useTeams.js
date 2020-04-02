import {useState,useEffect} from "react";
import {f1Services} from "../services/f1Services.js";

export const useTeams = (props) => {
    const [teams,setTeams] = useState([]);

    const getTeams= async () => {
      const r = await f1Services.getTeams(props);
      
      const responseTeams =r.data.MRData.ConstructorTable.Constructors;

      setTeams(responseTeams);
    };

    useEffect(() => {
        getTeams();
    },[props]);

    return teams;
};
