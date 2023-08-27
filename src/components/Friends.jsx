import friendsStyle from "./Friends.module.scss";
import React from "react";
import Friend from "./Friend";

const DUMMY_FRIENDS = [
  {
    firstName: "Lewis",
    lastName: "Hamilton",
    accName: "LewisHamilton",
    img: "",
  },
  {
    firstName: "Alexander",
    lastName: "Albon",
    accName: "AlexanderAlbon",
    img: "",
  },
  {
    firstName: "Max",
    lastName: "Verstappen",
    accName: "MaxVerstappen",
    img: "",
  },
];

const Friends = () => {
  return (
    <div className={friendsStyle.main}>
      {DUMMY_FRIENDS.map((friend) => {
        return (
          <Friend
            key={friend.firstName + friend.lastName + Math.random()}
            firstName={friend.firstName}
            lastName={friend.lastName}
            accName={friend.accName}
            // img={friend.img}
          />
        );
      })}
    </div>
  );
};

export default Friends;
