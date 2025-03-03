import React from "react";
import PostCard from "../../ui/Post";

const Home = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </>
  );
};

export default Home;
