import React from 'react'
import '../styles/mainsection.css'
import { AiOutlineSearch } from "react-icons/ai";
import profile from '../assets/pathy.jpeg'

const Mainsection = () => {
  return (
    <div className='mainsection'>
        <div className="seachbar">
           <label for="search-box"> <AiOutlineSearch  className='icone-search'/> </label> 
            <input type="text" id='search-box' placeholder='search'/>
        </div>
        <div className="listmessage">
          <div className="titre-recent">
          <h4>Recent</h4>
          </div>
          <div className='info-message'>
          <div className="profile-message">
            <img src={profile} alt="mon profile" />
            <div className="username">
              <h4>Pathy Mavuba</h4>
              <p style={{color:"#00000",opacity:".5"}}>ça va?</p>
            </div>
          </div>
          <div className="bordure"></div>
          </div>
          {/* deuxième recent  */}
          <div className='info-message'>
          <div className="profile-message">
            <img src={profile} alt="mon profile" />
            <div className="username">
              <h4>Pathy Mavuba</h4>
              <p style={{color:"#00000",opacity:".5"}}>ça va?</p>
            </div>
          </div>
          <div className="bordure"></div>
          </div>
           {/* troisième recent  */}
           <div className='info-message'>
            <div className="profile-message">
              <img src={profile} alt="mon profile" />
              <div className="username">
                <h4>Pathy Mavuba</h4>
                <p style={{color:"#00000",opacity:".5"}}>ça va?</p>
              </div>
            </div>
            <div className="bordure"></div>
            </div>      
        </div>
    </div>
  )
}

export default Mainsection