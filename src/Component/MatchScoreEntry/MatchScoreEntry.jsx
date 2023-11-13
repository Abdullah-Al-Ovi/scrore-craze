import { createContext, useState } from "react";
import Toss from "./Toss/Tosss";

export const teamContext = createContext(null)
const MatchScoreEntry = () => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const teamInfo = {team1,setTeam1,team2,setTeam2}

  return (
    // <teamContext.Provider value={teamInfo}>
    //     <Toss></Toss>
    // </teamContext.Provider>
    <div></div>
  );
};

export default MatchScoreEntry;
