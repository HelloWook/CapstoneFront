import React from "react";
import "../styles/Comment.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment({ content, email, createdAt }) {
  return (
    <div className="comment">
      <span className="comment-email">{email}</span>
      <span className="comment-content">{content}</span>
      <span className="comment-createdAt">{createdAt}</span>
      <FontAwesomeIcon icon={faX} />
    </div>
  );
}

export default Comment;
