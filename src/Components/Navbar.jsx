
import { Link } from "react-router-dom"


const Navbar = () => {
  return (

   <div >

    <Link to ="/">
    <h1 className= "text-transform: uppercase; text-red-700 font-nsans-bold cursor-pointer text-5xl">
        Netflix</h1>
    </Link>

    <div className="absolute w-full flex items-center justify-between z-50">
      <Link to="/login">
       <button className="capitalize pr-4">Login</button>
      </Link>

      <Link to="/signup">
       <button className="capitalize bg-red-700 px-6 py-2 rounded cursor-pointer">Signup</button>
      </Link>
    </div>
   </div>

  );
};

export default Navbar
