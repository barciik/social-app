import friendsStyle from './Friends.module.scss'
import React from 'react'
import Friend from './Friend'

const DUMMY_FRIENDS = [{
    firstName: 'Alan',
    lastName: 'Siedler',
    img: ''
}, {
    firstName: 'Norbert',
    lastName: 'Pomałecki',
    img: ''
}, {
    firstName: 'Adrian',
    lastName: 'Dąbrowski',
    img: ''
}]

const Friends = () => {


  return (
    <div className={friendsStyle.main}>
        {DUMMY_FRIENDS.map(friend => {
            return <Friend 
            key={friend.firstName + friend.lastName + Math.random()} 
            firstName={friend.firstName} 
            lastName={friend.lastName} 
            img={friend.img}/>
        })}
    </div>
  )
}

export default Friends