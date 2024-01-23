import axios from "axios";
import { useEffect, useState } from "react";
import endpoints from "../Services/Movieservices";

const Hero = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(endpoints.popular)
      .then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, []);

  const truncate=(str, length)=>{
    if(!str) return "";
    return str.length > length ? str.slice(0, length)+"..." :str;
  };

  if (!movie) {
    return (
      <>
        <p>Fetching movie...</p>
      </>
    );
  }

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h[850px] ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h[850px] bg-gradient-to-r from-black"/>
          {backdrop_path && (
            <><img
            className="w-full h-full object-cover object-top"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title} />
            <div className="absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8">
              <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
              <div className="mt-8 mb-4">
                <button className="capatilize bg-gray-300 text-black py-2 px-5 ">Play</button>
                <button className="capatilize border-gray-300 py-2 px-5 ml-4">Watch later</button>
              </div>
              <p className="text-gray-300 text-sm">{release_date}</p>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncate(overview, 165)}</p>
              
              </div></>
          )}
        
      </div>
    </div>
  );
};

export default Hero;

