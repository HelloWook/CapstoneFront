import React from "react";
import "../styles/Card.css";
function Card({ title, content, email }) {
  return (
    <div className="card">
      <p>{title}</p>
      <p>{content}</p>
      <p>{email}</p>
    </div>
  );
}

export default Card;
