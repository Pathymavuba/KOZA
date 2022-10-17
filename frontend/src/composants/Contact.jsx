import React from 'react'
import '../styles/contact.css'
import { AiOutlineSearch } from "react-icons/ai";
import profile from '../assets/pathy.jpeg'

const Contact = () => {
  return (
    <div className='mainsection-contact'>
        <div className="seachbar">
           <label for="search-box"> <AiOutlineSearch  className='icone-search'/> </label> 
            <input type="text" id='search-box' placeholder='search'/>
        </div>
        <div className="list-contact">
          <div className="titre-recent">
          <h2>All users</h2>
          </div>
          <div className='info-contact'>
          <div className="profile-contact">
            <div className="username">
              <h4>Pathy Mavuba</h4>
            </div>
          </div>
          <div className="bordure"></div>
          </div>
            {/* user2 */}
          <div className='info-contact'>
          <div className="profile-contact">
            <div className="username">
              <h4>Pathy Mavuba</h4>
            </div>
          </div>
          <div className="bordure"></div>
          </div>

            {/* user2 */}
            <div className='info-contact'>
          <div className="profile-contact">
            <div className="username">
              <h4>Pathy Mavuba</h4>
            </div>
          </div>
          <div className="bordure"></div>
          </div>
         
        </div>
    </div>
  )
}

export default Contact