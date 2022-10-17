import React from 'react'
import Leftsection from './Leftsection'
import '../styles/koza.css'
import Conversation from './Conversation'
import { Outlet } from 'react-router-dom'


const Koza = ({logout}) => {

  return (
    <div className='koza' >
      <Leftsection  logout={logout}/>
      <Outlet />
      <Conversation />
    </div>
  )
}

export default Koza