
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {

  const {user, logout}=UserAuth();
  const navigate = useNavigate();
  
  const handleLogout = async()=>{
    try{
      await logout();
      navigate("/");
    } catch(err){
      console.log(err);
    }
  };
  return (

   <div className="absolute w-full p-4 flex items-center justify-between z-50">

    <Link to ="/">
    <h1 className= "text-transform: uppercase; text-red-700 font-nsans-bold cursor-pointer text-5xl">
        Netflix</h1>
    </Link>

    {user?.email ?
    (
      <div>
      <Link to="/profile">
       <button className="capitalize pr-4">Profile</button>
      </Link>
  
        
         <button onClick={handleLogout} className="capitalize bg-red-700 px-6 py-2 rounded cursor-pointer">Logout</button>
        
      </div> 
    ):(
      <div>
      <Link to="/login">
       <button className="capitalize pr-4">Login</button>
      </Link>
  
        <Link to="/signup">
         <button className="capitalize bg-red-700 px-6 py-2 rounded cursor-pointer">Signup</button>
        </Link>
      </div> 
    )
    }

      {/* <div className="absolute w-full flex items-center justify-between z-50">
       <Link to="/login">
        <button className="capitalize pr-4">Login</button>
       </Link>

       <Link to="/signup">
        <button className="capitalize bg-red-700 px-6 py-2 rounded cursor-pointer">Signup</button>
       </Link>
     </div>  */}
   </div>

  );
  }

export default Navbar
