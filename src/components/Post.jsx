import React from "react";
import postStyles from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={postStyles.post}>
      <p>{props.text}</p>
    </div>
  );
};

export default Post;
