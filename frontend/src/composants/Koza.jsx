import React from 'react'
import Leftsection from './Leftsection'
import '../styles/koza.css'
import Conversation from './Conversation'
import { Outlet } from 'react-router-dom'


const Koza = () => {
  return (
    <div className='koza'>
      <Leftsection />
      <Outlet />
      <Conversation />
    </div>
  )
}

export default Koza