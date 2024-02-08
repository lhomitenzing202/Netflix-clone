import { useEffect, useState } from "react"
import axios from "axios"
import Movieitems from "./Movieitems";
import{MdChevronRight, MdChevronLeft} from 'react-icons/md';


// eslint-disable-next-line react/prop-types
const Movierow = ({title, url}) => {
  const rowId = Math.floor(Math.random()*1000)
  const[movie, setMovie]=useState([]);

  useEffect(()=>{
    axios.get(url).then((response)=>setMovie(response.data.results))
  },[url]);

  const slide=(offset)=>{
    const slider = document.getElementById('slider'+ rowId)
    slider.scrollLeft = slider.scrollLeft + offset 
  }
  return (
<>
<h2 className="font-nsans-bold md:text-xl p-4 capitallize">{title}</h2>

<div className="relative flex items-center group">
  <MdChevronLeft
  onClick={()=>slide(-500)}
  className="bg-white rounded-full left-2 opacity-80 absolute text-gray-700 z-10 hidden group-hover:block cursor-pointer size{40}"/>
  <div 
  id = {`slider` + rowId}
   className="w-full h-full overflow-x-scroll whitespace-nowarp scroll-smooth scrollbar-hide">

    {movie.map((movie)=>(
    <>
    <Movieitems key={movie.id} movie={movie}/>
    </>
    ))}
   </div>
   <MdChevronRight 
   onClick={()=>slide(500)}
   className="bg-white rounded-full right-2 opacity-80 absolute text-gray-700 z-10 hidden group-hover:block cursor-pointer size{40}"/> 
</div>
</>
  )
}

export default Movierow