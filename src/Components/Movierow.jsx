import { useEffect, useState } from "react"
import axios from "axios"
import Movieitems from "./Movieitems";


// eslint-disable-next-line react/prop-types
const Movierow = ({title, url}) => {

  const[movie, setMovie]=useState([]);

  useEffect(()=>{
    axios.get(url).then((response)=>setMovie(response.data.results))
  },[url]);

  console.log(movie);
  return (
<>
<h2 className="font-nsans-bold md:text-xl p-4 capitallize">{title}</h2>

<div className="relative flex items-center">
  <div 
  id = {`slider`}
   className="w-full h-full overflow-x-scroll whitespace-nowarp scroll-smooth scrollbar-hide">

    {movie.map((movie)=>(
    <>
    <Movieitems key={movie.id} movie={movie}/>
    </>
    ))}
   </div>
</div>
</>
  )
}

export default Movierow