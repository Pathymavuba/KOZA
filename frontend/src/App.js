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
import axios from 'axios'

const App = () => {


  const [username,setUsername]=useState("")
  const [password,setPassword] = useState("") 
  const [token,setToken]= useState("")
  const [users,setUsers]=useState([])
  const [userId,setUserId]=useState("")
  const [conversationRecent,setConversationRecent]=useState([])
  const [otherId,setOtherId]=useState("")
  const [conversationId,setConversationId]=useState("")
  const [message,setMessage]=useState([])
  const [textsended,setTextsended]=useState('')
  const  [user,setUser] =  useState({})
  
  



  
  
     
  const navigate = useNavigate()
  // console.log(conversationId)

  useEffect(()=>{
    console.log("ton token",token)
    setToken(localStorage.getItem("token"))
    setUserId(localStorage.getItem("userId"))
  },[token])

  useEffect(()=>{
    axios({method:"GET",
    headers:{'Content-Type':'application/json',"authorization":token},
    url:`http://localhost:4200/koza/users/${userId}`})
    .then(data=>setUser(data))
    .catch(err=>console.log(err))
 },[userId])

  const logout = ()=>{
     //se deconnecter
    setToken("")
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("userId")
    navigate("/accueil/login")
  }

  return (
    <div className='App' >

 
<myContext.Provider value={{username,setUsername,password,setPassword,token,setToken,users,setUsers,userId,conversationRecent,conversationId,setConversationId,setConversationRecent,otherId,setOtherId,message,setMessage,textsended,setTextsended,user}}>

<Routes>
   <Route path="/" element={<AccueilPage/>}> 
      <Route path="/" element={<Signup/>} />
      <Route path="/accueil/login" element={<Login/>} />
   </Route> 
   <Route path="/accueil/koza" element={<Koza logout={logout}/>} >
         <Route path="/accueil/koza" element={<Mainsection  />} />
         <Route path="/accueil/koza/allusers" element={<Contact/>} />
 
   </Route>
      
         
   </Routes>

</myContext.Provider>
 

  
  
     
      
      
    </div>
  )
}

export default App