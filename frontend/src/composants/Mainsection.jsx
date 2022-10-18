import React from 'react'
import '../styles/mainsection.css'
import { AiOutlineSearch } from "react-icons/ai";
import profile from '../assets/pathy.jpeg'
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { myContext } from '../Mycontext';
import RecentConversation from './RecentConversation';

const Mainsection = ({handlecoversation}) => {
  const {userId,token,setConversationRecent,conversationRecent}=useContext(myContext)
  
  
  useEffect(()=>{
  
    axios({method:"GET",url:`http://localhost:4200/koza/${userId}`,headers:{'Content-Type':'application/json',"authorization":token}})
    .then(res=>{

      // console.log(res.data)
      setConversationRecent(res.data)
     
    })
    .catch(err=>console.log(err))

  },[token,userId])

// console.log(conversationRecent)


  
   return (
    <div className='mainsection' >
        <div className="seachbar">
           <label for="search-box"> <AiOutlineSearch  className='icone-search'/> </label> 
            <input type="text" id='search-box' placeholder='search'/>
        </div>
        <div className="listmessage">
          <div className="titre-recent">
          <h4>Recent</h4>
          </div>

      {conversationRecent.map((conversation,index)=>{
        return(
          
        
        <RecentConversation key={index}  recentId={conversation.members[0]._id === userId ? conversation.members[1]._id : conversation.members[0]._id}   name={conversation.members[0]._id === userId ? conversation.members[1].username : conversation.members[0].username}/>
             
          
                      
       
        )
      })}
      
      
          
        </div>
    </div>
  )
}

export default Mainsection