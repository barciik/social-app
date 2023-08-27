import React, { useEffect, useState } from "react";
import postSectionStyles from "./PostsSection.module.scss";
import Post from "./Post";

const DUMMY_POSTS = [
  { name: "name", text: "test1", time: "12:00" },
  { name: "name", text: "test2", time: "12:00" },
  { name: "name", text: "test3", time: "12:00" },
  { name: "name", text: "test3", time: "12:00" },
  { name: "name", text: "test3", time: "12:00" },
];

const PostsSection = (props) => {
  const data = props.data;
  console.log(props.data);
  

  return (
    <div className={postSectionStyles.postSection}>
      {data ? data.LewisHamilton.posts.map(user => console.log(user)) : null}
    </div>
  );
};

export default PostsSection;
