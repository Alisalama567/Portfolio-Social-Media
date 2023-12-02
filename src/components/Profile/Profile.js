import React from 'react'
import './Profile.css'
import ProfileLeft from '../ProfileLeft/ProfileLeft'
import ProfileCard from '../ProfileSide/ProfileCard/ProfileCard'
import PostSide from '../ProfileSide/PostSide/PostSide'
import RightSide from '../RightSide/RightSide'
const Profile = () => {
  return (
    <div className='profile'>
    <ProfileLeft/>
    <div className="profile-center">
        <ProfileCard/>
        <PostSide/>
    </div>
    <RightSide/>
    </div>
  )
}

export default Profile