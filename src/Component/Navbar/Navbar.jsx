import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { useContext } from 'react';
import { authContex } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
  const {logOut,user,disName}= useContext(authContex)
  const navigate = useNavigate()
  const handleSignOut=()=>{
    logOut()
    .then(()=>{
        navigate('/')
    })
}

    return (
        <div className="navbar bg-base-100 w-[85%] mx-auto shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">ScoreCraze</a>
    <img className='border-2 w-[50px] rounded-full border-black' src={logo} />
  </div>
  <div className="navbar-end">
  {
    user &&  <div className="flex md:inline-block flex-col gap-2 justify-center items-center">
      
      <span className="mx-2  bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded py-1 px-[2px] md:font-medium text-white">{user.displayName ? user.displayName : disName}</span>
        
        <Link to='/'><button onClick={handleSignOut} className="rounded p-[2px] md:p-1  bg-red-500 text-white md:font-semibold">Sign out</button> </Link>
        
    </div>
    

   }
  </div>
</div>
    );
};

export default Navbar;