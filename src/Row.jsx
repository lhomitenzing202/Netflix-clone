// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from "./axios";

// eslint-disable-next-line react/prop-types
function Row({title,fetchUrl}){
    const[movies, setMovies] = useState([]);


    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(fetchUrl); 
            setMovies(request.data.results);
            return request;

        }
        fetchData();

    },[fetchUrl])
     console.log(movies)

  return (
    <>
    <h2>{title}</h2>
    </>
  )
}

export default Row