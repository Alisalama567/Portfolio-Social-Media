import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import Signup from '../Signup/Signup'
const Auth = () => {
  return (
    <div className='Auth'>
        <div className="a-left">
            <img src={Logo} alt="" srcset="" />
            <div className="webname">
                <h1>My Portfolio</h1>
                <h6>Explore the ideas throught the world</h6>
            </div>
        </div>
       <Signup/>
    </div>
  )
}

export default Auth