import React from 'react'
import './PostSide.css'
import PostSearch from '../../PostsSearch/PostSearch'
import Posts from '../../Posts/Posts'
const PostSide = () => {
  return (
    <div className='postside'>
      <PostSearch/>
      <Posts/>
    </div>
  )
}

export default PostSide