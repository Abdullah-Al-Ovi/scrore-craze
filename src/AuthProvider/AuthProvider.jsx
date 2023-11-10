import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,signInWithPopup, signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase";

export const authContex = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]= useState('')
    const [loading,setLoading]=useState(true)
    const [disName,setDisName]=useState('')
   
    // const [photoLink,setPhotoLink] = useState('') 
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
    const authInfo = {user,createUser,disName,handleName,updateUser,signInUser,logOut}
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
}
export default AuthProvider;