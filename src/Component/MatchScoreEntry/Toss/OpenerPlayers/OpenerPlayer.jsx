import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContex } from "../../../../AuthProvider/AuthProvider";
import axios from "axios";


const OpenerPlayer = () => {
    // const [striker,setStriker] = useState('')
    // const [nonStriker,setNonStriker] = useState('')
    // const [openningBowler,setOpenningBowler] = useState('')
    const { striker, setStriker, nonStriker, setNonStriker, openningBowler, setOpenningBowler ,battingTeam} = useContext(authContex)
    const navigate = useNavigate()

    console.log(striker, nonStriker, openningBowler);
    const openerInfo = { striker, nonStriker, openningBowler }

    const handleStriker =e=>{
        e.preventDefault()
        const run = 0
        const name = striker
        const role = 'Striker'
        setStriker(e.target.striker.value)
        const playerInfo = {battingTeam,name,role,run}
        axios.post('http://localhost:5000/opener',playerInfo).then(res=>{
            console.log(res.data);
        })    
    }
    const handleNonStriker =e=>{
        e.preventDefault()
        const run = 0
        const name = nonStriker
        const role = 'Non striker'
        setStriker(e.target.nonStriker.value)
        const playerInfo = {battingTeam,name,role,run}
        axios.post('http://localhost:5000/opener',playerInfo).then(res=>{
            console.log(res.data);
        })    
    }

    return (
        <div className="my-7 w-[60%] mx-auto space-y-5">
            <h3 className="text-2xl font-medium text-center">Select Openning players</h3>
            <p>{battingTeam}</p>
            <form onSubmit={handleStriker} className="text-center w-full ">
                <label htmlFor="">
                    <p>Striker</p>
                    <input onChange={(e) => setStriker(e.target.value)} className="border-2 my-3 border-blue-200 mr-2" type="text" name="striker" />
                </label>
               
                <input type="submit" value='Set' className="border-2 p-2 font-medium rounded-md text-white bg-red-500" />

            </form>

            <form onSubmit={handleNonStriker} className="text-center w-full ">
                
                    
                    <label >
                        <p>Non-Striker</p>
                        <input onChange={(e) => setNonStriker(e.target.value)} className="border-2 my-3  border-blue-200 mr-2" type="text" name="nonStriker" />
                    </label>
                
                <input type="submit" value='Set' className="border-2 p-2 font-medium rounded-md text-white bg-red-500" />

            </form>
        <Link to='/scoreBoard'>
           <div className="text-center"> 
           <button className="btn btn-ghost">Next</button>
           </div>
        </Link>
        </div>
    );
};

export default OpenerPlayer;