import React from "react";
import "../styles/Card.css";
function Card({ title, content, email }) {
  return (
    <div className="card">
      <p>제목 : {title}</p>
      <p>작성자 : {email}</p>
    </div>
  );
}

export default Card;
