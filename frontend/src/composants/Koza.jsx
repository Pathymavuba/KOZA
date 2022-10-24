import React from 'react'
import Leftsection from './Leftsection'
import '../styles/koza.css'
import Conversation from './Conversation'
import { Outlet } from 'react-router-dom'
import ConversationCover from './ConversationCover'
import { useContext } from 'react'
import { myContext } from '../Mycontext'


const Koza = ({logout}) => {

  const {showConversation}=useContext(myContext)

  return (
    <div className='koza' >
      <Leftsection  logout={logout}/>
      <Outlet />
      {showConversation?<Conversation />:<ConversationCover />}
    </div>
  )
}

export default Koza