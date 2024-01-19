import { Link } from "react-router-dom"


const Navbar = () => {
  return (

   <div>
    <Link to ="/">
    <h1 className= "uppercase text-red-700 font-nsans-bold cursor-pointer text-5xl">
        Netflix</h1>
    </Link>
   </div>
  );
};

export default Navbar