import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendSide from '../TrendSide/TrendSide'
import FollowresCard from '../ProfileSide/FollowersCard/FollowresCard'
const RightSide = () => {
  return (
    <div className='rightside'>
        <div className="navicon">
           <img src={Home} alt="" srcset="" />
           <UilSetting/>
           <img src={Noti} alt="" srcset="" />
           <img src={Comment} alt="" srcset="" />
        </div>
        {/* <TrendSide/> */}
        <FollowresCard/>

       <a href="https://github.com/Alisalama567?tab=repositories" target="_blank" rel="noopener noreferrer">
       <button className="button r-button">
          GuiHup
        </button>
       </a> 
    </div>
  )
}

export default RightSide