import React from 'react'
import friendStyles from './Friend.module.scss'

const Friend = (props) => {
  return (
    <>
        <div className={friendStyles.friendContainer}>
            <img className={friendStyles.profilePicture} src={props.img}
            //  alt={props.firstName + props.lastName}
              />
            <div className={friendStyles.infoSection}>
                <p>{props.firstName + ' ' + props.lastName}</p>
            </div>
            <div className={friendStyles.addFriendBtn}></div>
        </div>
    </>
  )
}

export default Friend