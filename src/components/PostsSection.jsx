import React from 'react'
import postSectionStyles from './PostsSection.module.scss'
import Post from './Post'

const DUMMY_POSTS = [
    {name: 'name', text: 'test1', time: '12:00'},
    {name: 'name', text: 'test2', time: '12:00'},
    {name: 'name', text: 'test3', time: '12:00'},
    {name: 'name', text: 'test3', time: '12:00'},
    {name: 'name', text: 'test3', time: '12:00'},
]

const PostsSection = () => {
  return (
    <div className={postSectionStyles.postSection}>{
        DUMMY_POSTS.map(post => {
            return <Post text={post.text} name={post.name} time={post.time}/>
        })
    }</div>
  )
}

export default PostsSection