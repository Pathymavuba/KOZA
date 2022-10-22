import React from 'react'
import '../styles/RecentConversation.css'
import profile from '../assets/profile.png'
import { myContext } from '../Mycontext'
import { useContext } from 'react'

const RecentConversation = ({name,recentId}) => {

    const {setOtherId}=useContext(myContext)
    const handlecoversation = ()=>{
       setOtherId(recentId)
        
      }
  return (
    <div>
         <div className='info-message' onClick={handlecoversation} >
        <div className="profile-message">
          <img src={profile} alt="mon profile" />
              <div className="username" > 
              <h4>{name}</h4>
              <p style={{color:"#00000",opacity:".5"}}>ça va?</p>
            </div>
                      
        </div>
        <div className="bordure"></div>
        </div>
    </div>
  )
}

export default RecentConversation