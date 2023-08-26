import React from 'react'
import postSectionStyles from './PostsSection.module.scss'
import Post from './Post'

const DUMMY_POSTS = [
    {text: 'test'},
    {text: 'test2'},
    {text: 'test3'},
    {text: 'test3'},
    {text: 'test3'},
]

const PostsSection = () => {
  return (
    <div className={postSectionStyles.postSection}>{
        DUMMY_POSTS.map(post => {
            return <Post text={post.text}/>
        })
    }</div>
  )
}

export default PostsSection