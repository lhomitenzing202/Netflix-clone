import Hero from "../Components/Hero"
import Movierow from "../Components/Movierow"
import endpoints from "../Services/Movieservices"


const Home = () => {
  return (
    <>
   <Hero/>
   <Movierow title="upcoming" url={endpoints.upcoming}/>
   <Movierow title="trending" url={endpoints.trending}/>
   <Movierow title="top rated" url={endpoints.topRated}/>
   <Movierow title="comedy" url={endpoints.comedy}/>
   <Movierow title="popular" url={endpoints.popular}/>



   </>
  )
}

export default Home