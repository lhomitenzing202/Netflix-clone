import Hero from "../Components/Hero"
import Movierow from "../Components/Movierow"
import endpoints from "../Services/Movieservices"


const Home = () => {
  return (
    <>
   <Hero/>
   <Movierow title="Upcoming" url={endpoints.upcoming}/>
   <Movierow title="Trending" url={endpoints.trending}/>
   <Movierow title="Toprated" url={endpoints.topRated}/>
   <Movierow title="Comedy" url={endpoints.comedy}/>
   <Movierow title="Popular" url={endpoints.popular}/>



   </>
  )
}

export default Home