import React, { useState } from 'react'
import Signup from './composants/Signup'
import Login from './composants/Login'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import AccueilPage from './composants/AccueilPage'
import { myContext } from './Mycontext'
import Koza from './composants/Koza'
import Mainsection from './composants/Mainsection'
import Contact from './composants/Contact'

const App = () => {


  

  const [username,setUsername]=useState("")
  const [password,setPassword] = useState("") 
  return (
    <div className='App'>

  
<myContext.Provider value={{username,setUsername,password,setPassword}}>

<Routes>
   <Route path="/accueil" element={<AccueilPage/>}> 
      <Route path="/accueil" element={<Signup/>} />
      <Route path="/accueil/login" element={<Login/>} />
   </Route> 
   <Route path="/accueil/koza" element={<Koza/>} >
         <Route path="/accueil/koza" element={<Mainsection/>} />
         <Route path="/accueil/koza/allusers" element={<Contact/>} />
 
   </Route>
      
         
   </Routes>

</myContext.Provider>
 

  
  
     
      
      
    </div>
  )
}

export default App