import React from "react";
import Card from "./Card";
import "../styles/post.css";
function Post({ title, img, post, comment }) {
  return (
    <div className="post">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Post;
