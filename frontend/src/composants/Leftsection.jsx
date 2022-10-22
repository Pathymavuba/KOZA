import React from 'react'
import '../styles/leftsection.css'
import profile from '../assets/profile.png'
import { AiFillMessage} from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { IoLogOut} from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Leftsection = ({logout}) => {

 
  const [list,setList]=useState("message")
  return (
    <div className='leftsection-body'>
        <div className="profile">
            <img src={profile} alt="mon profile" />
        </div>
        
    

     <div className="btn_message" onClick={()=>{setList("message")}} style={(list==="message")?{background: "rgba(0,0,0,.1)"}:{background:"none"}}>
     <Link to="/accueil/koza/" >  <AiFillMessage className='icones' /> </Link>  
          {list==="message"&& <span className='barre'></span>}
        </div>

      
        <div className="btn_user" onClick={()=>{setList("user")}} style={(list==="user")?{background: "rgba(0,0,0,.1)"}:{background:"none"}}>
        <Link to="/accueil/koza/allusers" >  <HiUserGroup className='icones'/> </Link>
          {list==="user"&& <span className='barre'></span>}
        </div>
        <div className="btn_logout">
          <IoLogOut className='icones' onClick={logout}/>
        </div>
        
    </div>
  )
}

export default Leftsection

// IoLogOut
// IoLogOut