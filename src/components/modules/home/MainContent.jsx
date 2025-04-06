import React from "react";
import PostCard from "../../ui/Post";

const MainContent = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </>
  );
};

export default MainContent;
