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
  const {user,userId,token,setConversationRecent,conversationRecent}=useContext(myContext)
  
  
  useEffect(()=>{
  
    axios({method:"GET",url:`http://localhost:4200/koza/${userId}`,headers:{'Content-Type':'application/json',"authorization":token}})
    .then(res=>{

      
      setConversationRecent(res.data)
      console.log(res.data[0].members,"pathy")
     
    })
    .catch(err=>console.log(err))

  },[token,userId])




  
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
        console.log(conversation.members)
        
        return(
          
        
        <RecentConversation key={index} recentId={conversation.members[0]._id === userId ? conversation.members[1]._id : conversation.members[0]._id} 
        name={conversation.members[0]._id === userId ? conversation.members[1].username : conversation.members[0].username}  />
             
          
                      
       
        )
      })}
      
      
          
        </div>
    </div>
  )
}

export default Mainsection

