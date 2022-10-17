import React from 'react'
import '../styles/signup.css'
import { Link } from 'react-router-dom'
import  axios from 'axios'
import { useContext } from 'react'
import { myContext } from '../Mycontext'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate()

  const {username,setUsername,password,setPassword}=useContext(myContext)

  const createuser_url = 'http://localhost:4200/koza/signup'

  const createUser = (e)=>{
    e.preventDefault();
    axios.post(createuser_url, {
      username: username,
      password: password
    })
    .then(()=>{
      navigate("/accueil/login")
      console.log("user created")})
    .catch(function (error) {
      console.log(error);
    });
  }

 

  return (
    <div className='login'>
    
        <div className='card_login'>
           <form >
          
            <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
          
         
            <input type="password" placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
         
          
            <input  onClick={createUser} type="button" className='btn-signup' value='signup'/>

          <Link to="/accueil/login"> <h5>click here to login</h5> </Link>  
          
          

           </form>

        </div>
    </div>
  )
}

export default Signup