import React, { useEffect, useState } from 'react'
import Signup from './composants/Signup'
import Login from './composants/Login'
import './App.css'
import {Routes,Route, Navigate} from 'react-router-dom'
import AccueilPage from './composants/AccueilPage'
import { myContext } from './Mycontext'
import Koza from './composants/Koza'
import Mainsection from './composants/Mainsection'
import Contact from './composants/Contact'
import { useNavigate } from 'react-router-dom';

const App = () => {


  const [username,setUsername]=useState("")
  const [password,setPassword] = useState("") 
  const [token,setToken]= useState("")
  const [users,setUsers]=useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    console.log("ton token",token)
    setToken(localStorage.getItem("token"))
  },[token])

  const logout = ()=>{
     //se deconnecter
    setToken("")
    window.localStorage.removeItem("token")
    navigate("/accueil/login")
  }

  return (
    <div className='App' logout={logout}>

 
<myContext.Provider value={{username,setUsername,password,setPassword,token,setToken,users,setUsers}}>

<Routes>
   <Route path="/accueil" element={<AccueilPage/>}> 
      <Route path="/accueil" element={<Signup/>} />
      <Route path="/accueil/login" element={<Login/>} />
   </Route> 
   <Route path="/accueil/koza" element={<Koza logout={logout}/>} >
         <Route path="/accueil/koza" element={<Mainsection/>} />
         <Route path="/accueil/koza/allusers" element={<Contact/>} />
 
   </Route>
      
         
   </Routes>

</myContext.Provider>
 

  
  
     
      
      
    </div>
  )
}

export default App