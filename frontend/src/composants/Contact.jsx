import React, { useEffect } from 'react'
import '../styles/contact.css'
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { myContext } from '../Mycontext';
import { useContext } from 'react';
import UserContact  from './UserContact';
// import profile from '../assets/pathy.jpeg'

const Contact = () => {
   
  const {users,userId,setUsers,token}=useContext(myContext)
   console.log("contact-token",token);
  useEffect(()=>{
    axios.get('http://localhost:4200/koza/users/',{headers:{'Content-Type':'application/json',"Authorization":token}})
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
              <UserContact  usercontact={data._id !== userId && data.username} recentId={data._id}/>
              </div>
          )
         })}
              
          
         
        </div>
    </div>
  )
}

export default Contact