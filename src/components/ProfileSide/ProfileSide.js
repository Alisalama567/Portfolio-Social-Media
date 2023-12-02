import React from 'react'
import './ProfileSide.css'
import LogoSearch from './LogoSearch/LogoSearch'
import ProfileCard from './ProfileCard/ProfileCard'
import FollowresCard from './FollowersCard/FollowresCard'
import TrendSide from '../TrendSide/TrendSide'
const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch/>
        <ProfileCard/>
        {/* <FollowresCard/> */}
        <TrendSide/>
    </div>
  )
}

export default ProfileSide