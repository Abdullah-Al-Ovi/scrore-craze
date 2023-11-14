import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,signInWithPopup, signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase";

export const authContex = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]= useState('')
    // const [loading,setLoading]=useState(true)
    const [disName,setDisName]=useState('')
    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [striker,setStriker] = useState('')
    const [nonStriker,setNonStriker] = useState('')
    const [openningBowler,setOpenningBowler] = useState('')
    const [battingTeam,setBattingTeam]= useState('')
    const handleName=(name)=>{
        return setDisName(name)
      }
    
    const createUser=(email,password)=>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,link)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: link
          })
      }
      const signInUser=(email,password)=>{
        
        return signInWithEmailAndPassword(auth,email,password)
      }
      const logOut =()=>{
        
        return signOut(auth)
      }
      useEffect(()=>{
        const unSubs = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unSubs()
    },[])
    const authInfo = {user,createUser,disName,handleName,updateUser,signInUser,logOut,team1,team2,setTeam1,setTeam2,striker,setStriker,nonStriker,setNonStriker,openningBowler,setOpenningBowler,battingTeam,setBattingTeam}
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
}
export default AuthProvider;