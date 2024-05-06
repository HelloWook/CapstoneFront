import React from "react";
import Header from "../components/Header";
import DetailPost from "../components/DetailPost";
import CommentList from "../components/CommentList";
function PostDetail() {
  return (
    <div>
      <Header />
      <DetailPost />
      <CommentList />
    </div>
  );
}

export default PostDetail;
