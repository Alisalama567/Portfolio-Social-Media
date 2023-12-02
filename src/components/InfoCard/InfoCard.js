import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModel from '../ProfileModel/ProfileModel'
const InfoCard = () => {
    const [modelopened , setmodelopend]=useState(false)
  return (
    <div className='infoCard'>
        <div className="infoHead">
        <h4>Your Info</h4>
          <div >
          <UilPen width='2rem' height='1.2rem' onClick={()=>setmodelopend(true)} />
          <ProfileModel modekopened={modelopened} setmodelopend={setmodelopend} />
          </div>  
        </div>
        <div className="info">
            <span>
                <b>Status : </b>
            </span>
            <span>in RelationShip</span>
        </div>
        <div className="info">
            <span>
                <b>Lives In : </b>
            </span>
            <span>Alqanate Alkhayraya</span>
        </div>
        <div className="info">
            <span>
                <b>Work At : </b>
            </span>
            <span>MF Group</span>
        </div>
        <button className="button logout-button "> Logout</button>
    </div>
  )
}

export default InfoCard