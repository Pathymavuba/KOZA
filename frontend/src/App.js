import React, { useState } from 'react'
import Signup from './composants/Signup'
import Login from './composants/Login'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import AccueilPage from './composants/AccueilPage'
import { myContext } from './Mycontext'

const App = () => {


  const [username,setUsername]=useState("")
  const [password,setPassword] = useState("") 
  return (
    <div className='App'>

  
<myContext.Provider value={{username,setUsername,password,setPassword}}>

<Routes>
   <Route path="/" element={<AccueilPage/>}> 
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
   </Route> 
      
         
   </Routes>

</myContext.Provider>
 

  
  
     
      
      
    </div>
  )
}

export default App