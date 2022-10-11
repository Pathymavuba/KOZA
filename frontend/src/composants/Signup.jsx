import React from 'react'
import '../styles/signup.css'

const signup = () => {
  return (
    <div className='login'>
    
        <div className='card_login'>
           <form action="" method=''>
          
            <input type="text" placeholder='username'/>
          
         
            <input type="password" placeholder='password'/>
         
          
            <input type="button" className='btn-signup' value='signup'/>

            <h5>click here to create a new account</h5>
          
          

           </form>

        </div>
    </div>
  )
}

export default signup