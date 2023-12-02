import React from 'react'
import './Followers.css'
import '../../../App.css'
import {Followers} from '../FllowersData/FollowersData'
import '../../../App.css'
const FollowresCard = () => {
    const submuitchange=()=>{
    //    alert('follow')
    }
    // console.log(Followers.lenght())

    
  return (
    <div className='FollowresCard'>
        <div className="titel">
            <h3 > See my projects </h3>
            {Followers.map((followers , id)=>{
                const {name , userName , img , link}=followers
                return(
                    <div className="follwores">
                    <div>
                    <img className='followersimg' src={img} alt={name}  />
                    </div>
                        <div className="name">
                        <span>{name}</span>
                        <span>{userName}</span>
                        </div>
                        <div>
                        </div>
                        <button  className='button' type="submit"><a href={link} target='_blank'>GitHup</a> </button>
                    </div>
                )
            })}
        </div>
    
    </div>
  )
}

export default FollowresCard