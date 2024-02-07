import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Signup from "./Pages/Signup"
import Navbar from "./Components/Navbar"
import { AuthContextProvider } from "./Context/AuthContext"
import ProtctedRoute from "./Components/ProtctedRoute"

const App = () => {
  return (
<>
<AuthContextProvider>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/Profile" element={<ProtctedRoute><Profile/></ProtctedRoute>}/>
</Routes>
</AuthContextProvider>
</>    
  )
}

export default App