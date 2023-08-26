import mainStyle from './Main.module.scss'
import React from 'react'
import PostsSection from './PostsSection'

const Main = () => {
  return (
    <div className={mainStyle.main}>
        <div className={mainStyle.homeBar}>
            <img className={mainStyle.logo} src="" alt="logo" />
        </div>
        <PostsSection />
    </div>
  )
}

export default Main