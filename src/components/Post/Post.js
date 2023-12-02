import React ,{ useState } from "react";
import "./Post.css";
import comment from '../../img/comment.png'
import Like from '../../img/like.png'
import Notlike from '../../img/notlike.png'
import share from '../../img/share.png'



const Post = ({ data }) => {
  const [islike , setlike] = useState(Notlike)
  const { img, name, desc, likes, liked } = data;
  const clicklike=()=>{
    if (liked ===true) {
      setlike(Like)
    }else{
     islike()
    }
      
    }
  
  return (
    <div className="post">
      <img src={img} alt={name} srcset="" />

      <div className="postreact">
        <img src={ islike }  alt={name} 
        onClick={()=>clicklike()}
        />
        <img src={comment} alt={name} />
       <a href="https://github.com/Alisalama567?tab=repositories" target="_blank" ><img src={share} alt={name} /></a>
    
      </div>
      <span className="like">{likes} likes</span>
      <div className="detail">
        <span>
            <b>{name}</b>
        </span>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default Post;
