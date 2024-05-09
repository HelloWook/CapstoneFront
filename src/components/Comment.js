import React from "react";
import "../styles/Comment.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function Comment({ content, email, createdAt, CommentID, handleDeleteFlower }) {
  const [year, month, day, hour, minute, second] = createdAt.split(/[-T:.Z]/);
  const formattedDatetime =
    [year, month, day].join("-") + "-" + [hour, minute, second].join("-");
  const LoggedInemail = useSelector((state) => state.email);

  return (
    <div className="comment">
      <span className="comment-email">{email}</span>
      <span className="comment-content">{content}</span>
      <span className="comment-createdAt">{formattedDatetime}</span>
      {LoggedInemail === email && (
        <FontAwesomeIcon
          icon={faX}
          onClick={() => {
            handleDeleteFlower(CommentID);
          }}
        />
      )}
    </div>
  );
}

export default Comment;
