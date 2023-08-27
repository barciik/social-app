import mainStyle from './Main.module.scss'
import React from 'react'
import PostsSection from './PostsSection'

const Main = (props) => {
  return (
    <div className={mainStyle.main}>
        <div className={mainStyle.homeBar}>
            <img className={mainStyle.logo} src="" alt="logo" />
        </div>
        <PostsSection data={props.data}/>
    </div>
  )
}

export default Main