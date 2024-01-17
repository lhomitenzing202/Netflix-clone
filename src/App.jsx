
import './App.css'
import requests from './Request'
import Row from './Row'

function App() {
  

  return (
    <>
     <h1> Hello world</h1>
   <Row title = "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
   <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </>
  )
}

export default App
