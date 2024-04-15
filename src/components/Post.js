// Post.js
import React from "react";
import Card from "./Card";
import "../styles/post.css";
import useGetPosts from "../hooks/useGetPosts";
import { useSelector } from "react-redux";

function Post() {
  const posts = useGetPosts();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="post">
      {!isLoggedIn && <button>등록</button>}
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
