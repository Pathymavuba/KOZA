import React from 'react'
import '../styles/conversation.css'
import profile from '../assets/pathy.jpeg'
import { MdPhotoCamera } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { myContext } from '../Mycontext';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


const Conversation = () => {

  
  const {otherId,token,userId,conversationId,setConversationId,message,setMessage,textsended,setTextsended}=useContext(myContext)
  const [userConversation,setUserConversation] = useState('')
  
  console.log(textsended)
 
  const sendMessage = ()=>{
    

    axios({method:"POST", 
    headers:{'Content-Type':'application/json',"authorization":token},
    url:`http://localhost:4200/koza/message/`,
   data:{
         conversationId:conversationId,
         text:textsended,
         senderId:userId}
     })
     
     .then(text => {
      
    })
     .catch(err => console.error(err))

     setTextsended("")
     console.log(textsended,"root")
     

  }  
  
  

  useEffect(() =>{
     axios({method:"GET",url:`http://localhost:4200/koza/find/${userId}/${otherId}`,headers:{'Content-Type':'application/json',"authorization":token}})

        .then((item)=>{ 
         
        
          setConversationId(item.data._id)
          
          item.data.members[0]._id === otherId?setUserConversation(item.data.members[0].username):setUserConversation(item.data.members[1].username)

    
        }) 
        .catch(err=>console.log(err))
  },[otherId] )

  useEffect(()=>{
   
      axios({
        method:'POST',
        url:'http://localhost:4200/koza/createConversation',
        headers:{'Content-Type':'application/json',"authorization":token},
        data :{
          members:[userId,otherId]
        }
      })
      .then(item=>console.log(item))
      .catch(err=>console.log(err))
    

  },[userId,otherId])

  


  useEffect(()=>{
    axios({method:"GET",url:`http://localhost:4200/koza/message/${conversationId}`,headers:{'Content-Type':'application/json',"authorization":token}})
    .then((item)=>{
      setMessage(item.data)
    })
    .catch(err=>console.log(err))

  },[conversationId,textsended,message])

 
  return (
    <div className='conversation'>
      <div style={{width:"100%"}}>
      <div className="profile-conversation">
            <img src={profile} alt="mon profile" />
            <div className='name-receiver'>
              <h2>{userConversation}</h2>
               <p style={{textAlign:"center"}}>Online</p>
            </div>
        </div> 
        <div className="bottom"></div>
      </div>

      <div className="discussion">
  
      
           
    {message.map(messages=>{
      let statutStyle = messages.senderId !== userId ? 'messagereceived' :'messagesended'
      let date = new Date(messages.createdAt)

 return (
   <div className={statutStyle}>
        <div className="message">{messages.text}</div>
        <div className="timestamp">{messages.createdAt}</div>
    </div> 
 )

    })}

     </div>        
      
      <div className="bottom-last"></div>
      <div className="send-message">
        <div className='send-text'>
        <input type="text" placeholder='text here' onChange={(e)=>{
          setTextsended(e.target.value)}}
          value={textsended}/>
        <label htmlFor="file"> <MdPhotoCamera  className='icon-camera'/> </label>
        <input type="file"  id='file' style={{display:"none"}}/>
        </div>
        <div className='icon-send' onClick={sendMessage}>
          <AiOutlineSend  className='send'/>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Conversation

