import{MdChevronLeft, MdChevronRight} from 'react-icons/md'
import{userAuth} from '../Context/AuthContext'
import{db} from '../Services/Firebase'
import{CreateImageUrl} from '../Services/Movieservices'
import { arrayRemove, doc,onSnapshot,updateDoc } from 'firebase/firestore'
import{AiOutLineClose} from 'react-icons/ai'
import { useEffect, useState } from 'react'

const Profile = () => {
  const[movies,setMovies]= useState([]);
  const{user} = userAuth();

  useEffect(()=>{
    if(user){
      onSnapshot(doc(db,'user', `${user.email}`),(doc)=>{
        if(doc.data()) setMovies(doc.data().favShows);
      });
    }
  }, [user, user.email]);

  const slide=(offset)=>{
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  const handleUnlikeShow= async(movie)=>{
    const userDoc = doc(db, 'users', user.email)

    await updateDoc(userDoc,{
      favShows: arrayRemove(movie),
    });
  }


  if(!user){
    return(
      <>
      <p>fetching shows....</p>
      </>
    );
  }

  return (
  <>
  <div>
    <img
    className='block w-full h-[500px] object-cover'
    src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/b7a4dbc4-b8fb-4c57-9e64-38bbdee88bfa/NP-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
     alt="//" />

     <div className='bg-black/60 fixed top-0 left-0 w-full h-[500px]'/>
     <div className='absolute top-[20%] p-4 md:p-8'>
     <h1 
     className='text-3xl md:text-5xl font-nsans-bold my-2'>
      my shows
     </h1>
     <p 
     className='font-nsans-light text-gray-400 text-lg'>
      {user.email}</p>
  </div>

  {/* movierow */}
  <h2 className="font-nsans-bold md:text-xl p-4 capitallize">fav shows</h2>

<div className="relative flex items-center group">
  <MdChevronLeft
  onClick={()=>slide(-500)}
  className="bg-white rounded-full left-2 opacity-80 absolute text-gray-700 z-10 hidden group-hover:block cursor-pointer size{40}"/>
  <div 
  id = {`slider`}
   className="w-full h-full overflow-x-scroll whitespace-nowarp scroll-smooth scrollbar-hide">

    {movies.map((movie)=>(
    <>
    {/* movie items  */}
<div 
key={movie.id}
className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block-rounded-lg overflow-hidden cursor-pointer m-2"></div>
   <img className="w-full h-40 block object-cover object-top" 
   src={CreateImageUrl(movie.backdrop_path ?? movie.poster_path,"w500")}
    alt={movie.title}
    />
    <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 ">
        <p className="whitespace-normal text-xs md:test-sm flex justify-center items-center h-full font-nsans-bold">
          {movie.title}
        </p>

        <p><AiOutLineClose 
        size={30} 
        onClick={()=>handleUnlikeShow(movies)}
        className='absolute top-2 right-2'/></p>
    </div>


    </>
    ))}
   </div>
   <MdChevronRight 
   onClick={()=>slide(500)}
   className="bg-white rounded-full right-2 opacity-80 absolute text-gray-700 z-10 hidden group-hover:block cursor-pointer size{40}"/> 
</div>

  </div>
  </>
  )
}

export default Profile