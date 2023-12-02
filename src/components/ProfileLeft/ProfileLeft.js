import React from 'react'
import './ProfileLeft.css'
import LogoSearch from '../ProfileSide/LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../ProfileSide/FollowersCard/FollowresCard'
const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
    <LogoSearch/>
     <InfoCard/>
     <FollowersCard/>
    </div>
  )
}

export default ProfileLeft