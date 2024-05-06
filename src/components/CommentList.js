import React, { useState } from "react";
import "../styles/CommentList.css";
import useGetComment from "../hooks/useGetComment";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import useGetCommenCount from "../hooks/useGetCommentNumber";

function CommentList() {
  const { postID } = useParams();
  const [comment, setComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(currentPage - 1);
  const [nextPage, setNextPage] = useState(currentPage + 1);
  const { comments } = useGetComment(postID, currentPage);
  const { commentsCount } = useGetCommenCount(postID);
  const pageMaxNumber = Math.ceil(commentsCount / 6);

  const commentChange = (event) => {
    if (event.target.value.length > 30) {
      alert("30자 이하로만 작성할 수 있습니다");
      return;
    }
    setComment(event.target.value);
  };

  return (
    <div className="communitydetailpost-content-commentlist">
      <h1>댓글</h1>
      <div className="communitydetailpost-content-commentlist-section">
        <div className="communitydetailpost-content-commentlist-text">
          {comments.map((data) => (
            <Comment
              key={data.CommentID}
              content={data.Content}
              email={data.Email}
              createdAt={data.CreatedAt}
            />
          ))}
        </div>
        <div className="communitydetailpost-content-commentlist-section-pagenumber">
          <span>{"<"}</span>
          <span
            className="prevPage"
            onClick={() => {
              setPrevPage((prev) => prev - 1);
              setCurrentPage((prev) => prev - 1);
              setNextPage((prev) => prev - 1);
            }}
          >
            {prevPage !== 0 && prevPage}
          </span>
          <span className="currentPage">{currentPage}</span>
          <span
            className="nextPage"
            onClick={() => {
              setPrevPage((prev) => prev + 1);
              setCurrentPage((prev) => prev + 1);
              setNextPage((prev) => prev + 1);
            }}
          >
            {pageMaxNumber >= nextPage && nextPage}
          </span>
          <span>{">"}</span>
        </div>
        <div className="communitydetailpost-content-commentlist-input">
          <h1>댓글 작성</h1>
          <input
            type="text"
            placeholder="댓글창"
            onChange={commentChange}
            value={comment}
          />
          <button>작성</button>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
