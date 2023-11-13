import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContex } from "../../../../AuthProvider/AuthProvider";


const OpenerPlayer = () => {
    // const [striker,setStriker] = useState('')
    // const [nonStriker,setNonStriker] = useState('')
    // const [openningBowler,setOpenningBowler] = useState('')
    const {striker,setStriker,nonStriker,setNonStriker,openningBowler,setOpenningBowler} = useContext(authContex)
    console.log(striker,nonStriker,openningBowler);
    return (
        <div className="my-7 w-[60%] mx-auto space-y-5">
            <h3 className="text-2xl font-medium text-center">Select Openning players</h3>
            <form onSubmit={(e)=>e.preventDefault()} className="text-center w-full ">
                <label htmlFor="">
                    <p>Striker</p>
                    <input onChange={(e)=>setStriker(e.target.value)} className="border-2 my-3 border-blue-200 mr-2" type="text" name="striker"  />
                </label>
                <label htmlFor="">
                    <p>Non-Striker</p>
                    <input onChange={(e)=>setStriker(e.target.value)} className="border-2 my-3  border-blue-200 mr-2" type="text" name="nonStriker"  />
                </label>
                <label htmlFor="" >
                    <p>Openning Bowler</p>
                    <input onChange={(e)=>setStriker(e.target.value)} className="border-2 border-blue-200 mr-2 my-3 " type="text" name="openningBowler"  />
                </label>
                <div className="text-center">
                        <Link to='/scoreBoard'>
                            <input type="submit" value='Start Match' className="border-2 p-2 font-medium rounded-md text-white bg-red-500" />
                        </Link>
                    </div>
            
            </form>
        </div>
    );
};

export default OpenerPlayer;