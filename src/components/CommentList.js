import React from "react";
import "../styles/CommentList.css";
import useGetComment from "../hooks/useGetComment";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

function CommentList() {
  const { postID } = useParams();
  const { comments } = useGetComment(postID);
  console.log(comments);
  return (
    <div className="communitydetailpost-content-commentlist">
      <h1>댓글</h1>
      <div className="communitydetailpost-content-commentlist-section">
        {comments.map((data) => (
          <Comment
            key={data.CommentID}
            content={data.Content}
            email={data.Email}
            createdAt={data.CreatedAt}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentList;
