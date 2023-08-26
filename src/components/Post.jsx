import React from "react";
import postStyles from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={postStyles.post}>
      <h2 className={postStyles.name}>{props.name}</h2>
      <p className={postStyles.text}>{props.text}</p>
      <p className={postStyles.time}>{props.time}</p>
    </div>
  );
};

export default Post;
