import React from 'react'
import '../styles/signup.css'
import { Link } from 'react-router-dom'
import  axios from 'axios'
import { useContext } from 'react'
import { myContext } from '../Mycontext'


const Login = () => {

  const {username,setUsername,password,setPassword}=useContext(myContext)
  const login_url = 'http://localhost:4200/koza/login'

  

 const login_user = ()=>{
  axios.post(login_url,{
    username: username,
    password: password
  })
  .then((data)=>{console.log(data)})
  .catch((err)=>{console.log("userComperror",err)})
 }
  
  return (
    <div className='login'>
    
        <div className='card_login'>
           <form action="" method=''>
          
            <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
          
         
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
         
          
            <input onClick={login_user} type="button" className='btn-signup' value='Login'/>

           
          
            
            <Link to="/"> <h5>click here to create a new account</h5> </Link> 

           </form>

        </div>
    </div>
  )
}



export default Login