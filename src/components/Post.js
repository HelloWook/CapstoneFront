// Post.js
import React from "react";
import Card from "./Card";
import "../styles/post.css";
import useGetPosts from "../hooks/useGetPosts";

function Post() {
  const posts = useGetPosts();

  return (
    <div className="post">
      {posts.map((post) => (
        <Card
          key={post.PostID}
          title={post.Title}
          content={post.Content}
          email={post.email}
        />
      ))}
    </div>
  );
}

export default Post;
