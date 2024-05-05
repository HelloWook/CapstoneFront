import React from "react";
import Header from "../components/Header";
import DetailPost from "../components/DetailPost";
import { useParams } from "react-router-dom";
function PostDetail() {
  return (
    <div>
      <Header />
      <DetailPost />
    </div>
  );
}

export default PostDetail;
