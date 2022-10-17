import React, { useEffect } from 'react'
import '../styles/contact.css'
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { myContext } from '../Mycontext';
import { useContext } from 'react';
// import profile from '../assets/pathy.jpeg'

const Contact = () => {
   
  const {users,setUsers,token}=useContext(myContext)
   console.log("contact-token",token);
  useEffect(()=>{
    axios({method:"GET",url:'http://localhost:4200/koza/users/',headers:{'Content-Type':'application/json',"authorization":token}})
    .then(users=>{
      setUsers(users.data.users)
      console.log(users)})
    .catch((err)=>console.log(err))

  },[token])
  console.log(users)
  return (
    <div className='mainsection-contact'>
        <div className="seachbar">
           <label for="search-box"> <AiOutlineSearch  className='icone-search'/> </label> 
            <input type="text" id='search-box' placeholder='search'/>
        </div>
        <div className="list-contact">
          <div className="titre-recent">
          <h2>All users</h2>
          </div>
         {users.map((data,index)=>{
          return(
            <div className='info-contact'>
              <div className="profile-contact">
                <div className="username">
                  <h4>{data.username}</h4>
                </div>
              </div>
              <div className="bordure"></div>
              </div>
          )
         })}
              
          
         
        </div>
    </div>
  )
}

export default Contact