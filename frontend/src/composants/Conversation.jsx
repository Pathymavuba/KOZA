import React from 'react'
import '../styles/conversation.css'
import profile from '../assets/pathy.jpeg'
import { MdPhotoCamera } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";

const Conversation = () => {
  return (
    <div className='conversation'>
      <div style={{width:"100%"}}>
      <div className="profile-conversation">
            <img src={profile} alt="mon profile" />
            <div className='name-receiver'>
              <h2>Pathy Mavuba</h2>
               <p style={{textAlign:"center"}}>Online</p>
            </div>
        </div> 
        <div className="bottom"></div>
      </div>
      <div className="discussion"></div>
      <div className="bottom-last"></div>
      <div className="send-message">
        <div className='send-text'>
        <input type="text" placeholder='text here'/>
        <label htmlFor="file"> <MdPhotoCamera  className='icon-camera'/> </label>
        <input type="file"  id='file' style={{display:"none"}}/>
        </div>
        <div className='icon-send'>
          <AiOutlineSend  className='send'/>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Conversation

// AiOutlineSend