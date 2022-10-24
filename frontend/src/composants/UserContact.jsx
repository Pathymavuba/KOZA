import React from 'react'
import '../styles/userContact.css'
import { myContext } from '../Mycontext'
import { useContext } from 'react'


const UserContact = ({usercontact,recentId}) => {

    const {setOtherId,setSchowConversation}=useContext(myContext)
    const handlecoversation = ()=>{
        setOtherId(recentId)
        setSchowConversation(true)

    }

  return (
    <div className='info-contact' onClick={handlecoversation}>
       <div className="profile-contact">
         <div className="username">
             <h4>{usercontact}</h4>
         </div>
        </div>
       <div className="bordure"></div>
     </div>
  )
}

export default UserContact