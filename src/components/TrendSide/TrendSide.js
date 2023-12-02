import React from 'react'
import './TrendSide.css'
import {TrendData} from '../Data/TrendDtata'
const TrendSide = () => {
  return (
    <>
      <div> 
      <span className='prtitle' >My Tracks</span>
        </div>
    <div className='TrendData'>
        {TrendData.map((trend )=>{
            const {name , shares}=trend
            return(
              <div className='trend' >
              <span>->{name}</span>
              <span>Rate : {shares}%</span>
              </div>
            );
        })}
    </div>
    </>
    
  )
}

export default TrendSide