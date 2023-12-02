import React , {useState , useRef} from 'react'
import './Posysearch.css'
import Profileimg from '../../img/profileImg.jpg'
import {UilScenery} from "@iconscout/react-unicons"
import {UilPlayCircle} from "@iconscout/react-unicons";
import {UilLocationPoint} from "@iconscout/react-unicons"
import {UilSchedule} from "@iconscout/react-unicons"
import {UilTimes} from "@iconscout/react-unicons"



const PostSearch = () => {
  const [image , setImage]=useState(null);
  const imageRef = useRef();

  const onImageChange =(e)=>{
   if (e.target.files && e.target.files[0]) {
    let img = e.target.files[0];
    setImage({
      image: URL.createObjectURL(img)
    })
   }
  }
  return (
    <div className='PostSearch'>
        <div className="textpost">
            <img src={Profileimg} alt="" srcset="" />
            <input type="text" placeholder='Whats happening ?' />
        </div>
        <div className="mediadata">
          <div className="option" style={{color: 'var(--photo)'}}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery/>
            Photo
          </div>
          <div className="option" style={{color : 'var(--video)'}}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{color : 'var(--location)'}}>
            <UilLocationPoint/>
            Location
          </div>
          <div className="option" style={{color : 'var(--shedule)'}}>
            <UilSchedule/>
            Shedule
          </div>
          <div >
            <button className='button'>share</button>
            <div style={{display:'none'}}>
            <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
          </div>
          </div>
        </div>
        {image && (
            <div className="priveimage">
              <UilTimes onClick={()=>setImage(null)} />
              <img src={image.image} alt="" srcset="" />
            </div>
          )}
    </div>
  )
}

export default PostSearch