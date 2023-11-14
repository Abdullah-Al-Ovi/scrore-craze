import { useContext, useEffect, useState } from "react";
import { authContex } from "../../../AuthProvider/AuthProvider";
import axios from "axios";


const ScoreBoard = () => {
    // const {team1,team2,striker,nonStriker,openningBowler} = useContext(authContex)
    const [opener,setOpener] = useState([])
    const [player1Id,setPlayer1Id]= useState('')
    const [player2Id,setPlayer2Id]= useState('')
    const [player1,setPlayer1] = useState('')
    const [player2,setPlayer2] = useState('')
    const [player1Run,setPlayer1Run]= useState(0)
    const [player2Run,setPlayer2Run]= useState(0)
    const [player1role,setPlayer1role] = useState('')   
    const [player2role,setPlayer2role] = useState('')   
    const [totalRun,setTotalRun] = useState(0)
    const [totalRunId,settotalRunId] = useState('')
    const [strikerRun,setStrikerRun] = useState()
  
    useEffect(()=>{
      axios.get('http://localhost:5000/opener').then(res=>{
        setOpener(res.data)
       const find1 = res.data?.find(open=>open.role === 'Striker')
       setPlayer1(find1.name)
       setPlayer1Run(find1.run)
       setPlayer1role(find1.role)
       setPlayer1Id(find1._id)
       
       const find2 = res.data?.find(open=>open.role === 'Non striker')
       setPlayer2(find2.name)
       setPlayer2Run(find2.run)
       setPlayer2role(find2.role)
       setPlayer2Id(find2._id)

      })
    },[strikerRun])
    useEffect(()=>{
      axios.get('http://localhost:5000/totalRun').then(res=>{
        setTotalRun(res.data?.total_run)
        settotalRunId(res.data?._id)
      })
    },[strikerRun])

    const handleStrikerRun =e=>{
      // e.preventDefault()
      const runValue = parseInt(e.target.strikerRun.value,10)
       setStrikerRun(runValue);
      const newTotalRun  = totalRun + runValue
      axios.patch(`http://localhost:5000/totalRun/${totalRunId}`,{total_run:newTotalRun}).then(res=>{
      console.log(res.data);
      })
      if(runValue === 1 || runValue === 3 ){
        const player1NewRole = player1role ==='Striker'?'Non striker': 'Striker'
        const player2Newrole = player2role === 'Non striker'?'Striker': 'Non striker'
        axios.patch(`http://localhost:5000/roleChange/${player1Id}`,{role: player1NewRole}).then(res=>{
          console.log(res.data);
        })
        axios.patch(`http://localhost:5000/roleChange/${player2Id}`,{role: player2Newrole}).then(res=>{
          console.log(res.data);
        })
        
      }
      if(player1role === 'Striker'){
        const player1newRun = player1Run + runValue
         axios.patch(`http://localhost:5000/runChange/${player1Id}`,{run:player1newRun}).then(res=>{
           console.log(res.data);
         })
       }
       else if(player2role === 'Striker'){
         const player2newRun = player2Run + runValue
         axios.patch(`http://localhost:5000/runChange/${player2Id}`,{run:player2newRun}).then(res=>{
           console.log(res.data);
         })
       }


    }
    return (
        <div>
            
           <div className="w-[50%] mx-auto bg-gray-200 space-y-4 p-3">
                <h3>1st inning</h3>
                <h2>Score: {totalRun} - Wicket(Over)</h2>
           </div>
           <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Batsman Runs Table</h2>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border p-2">Batsman</th>
            <th className="border p-2">Run</th>
            <th className="border p-2">Role</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{player1}</td>
            <td className="border p-2">{player1Run}</td>
            <td className="border p-2">{player1role}</td>
            
          </tr>
          <tr>
            <td className="border p-2">{player2}</td>
            <td className="border p-2">{player2Run}</td>
            <td className="border p-2">{player2role}</td>
          </tr>
          <tr>
           
          </tr>
        </tbody>
      </table>
    </div>
    <div>
        <form className="flex gap-3" onSubmit={handleStrikerRun}  action="">
            <label htmlFor="">
            <div className="ml-7">
              <span>Add Run: </span>
            <input onChange={(e) => setStrikerRun(isNaN(parseInt(e.target.value, 10)) ? 0 : parseInt(e.target.value, 10))}
        value={strikerRun}  type="number" className="w-[100px]  font-medium border-2 border-black " name="strikerRun"/>
            </div>
            </label>
            
            <input type="submit" className="px-[3px] border-2 border-black " value="Add" />
            
        </form>

    </div>
        </div>
    );
};

export default ScoreBoard;