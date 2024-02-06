import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../Context/AuthContext";


const Signup = () => {
  const[rememberLoign, setRememberLogin]= useState(true);
  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');

  // eslint-disable-next-line no-unused-vars
  const {user, SignUp} = UserAuth();
  const navigate = useNavigate();

  const handleFormSubmit=async(e)=>{
    e.preventDefault();
   
    try{
      await SignUp(email,password);
      navigate('/'); 
    } catch(err){
      console.log(err)
    }
  };
  return (
    <>
    <div className="w-full h-screen">
      <img className="hidden sm:block absolute w-full h-full object-cover"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/b7a4dbc4-b8fb-4c57-9e64-38bbdee88bfa/NP-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
       alt="" />
       <div className="bg-black/70 top-0 left-0 w-full h-screen"/>
      
       <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 round-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-nsans-bold">Sign Up</h1>

            <form onSubmit={handleFormSubmit} className="w-full flex flex-col py-4">
              <input className="p-3 my-2 bg-gray-700 rounded"
              type="email"
              placeholder="email"
              autoComplete="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
              <input className="p-3 my-2 bg-gray-700 rounded"
              type="Password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
              <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">
                Sign Up</button>

                <div className="flex justify-between items-center text-gray-600">
                <p>
                  <input 
                  type="checkbox" 
                  className="mr-2"
                  checked={rememberLoign}
                  onChange={() => setRememberLogin(!rememberLoign)}
                  />
                  Remember me
                </p>
                <p>Need help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">Already suscribed to netflix ?</span>
                  <Link to="/login">Sign in</Link>
                </p>
            </form>
          </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Signup