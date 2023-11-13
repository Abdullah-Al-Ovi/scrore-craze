import { useContext } from "react";
import { authContex } from "../../../AuthProvider/AuthProvider";


const ScoreBoard = () => {
    const {team1,team2} = useContext(authContex)
    return (
        <div>
           <div>
                <h3>{team1},1st inning</h3>
                <h2>Run - Wicket(Over)</h2>
           </div>
        </div>
    );
};

export default ScoreBoard;