import React from 'react'
import './ProfileCard.css'
import Cover from '../../../img/cover.jpg'
import ProfileImage from '../../../img/profileImg.jpg'
const ProfileCard = () => {
    const ProfilePage = true;
  return (
    <div className='ProfileCard'>
        <div className="profileImage">
            <img src={Cover}alt="" srcset="" />
            <img src={ProfileImage} alt="" srcset="" />
        </div>
        <div className="ProfileName">
            <span>Ali Salama</span>
            <span> Front End Developer</span>
        </div>
        <div className="FollowStauts">
            <hr />
            <div>
                <div className="follow">
                    <span>8,866</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Following</span>
                </div>
                {ProfilePage && (
                    <>
                    
                        <div className="vl"></div>
                        <div className="follow">
                            <span>8</span>
                            <span>Project</span>
                        </div>
                        </>
                )}
            </div>
            <hr />  
            {ProfilePage ? "" : 
            <span className='proftext'>My profile</span>
            }
           
        </div>
    </div>
  )
}

export default ProfileCard