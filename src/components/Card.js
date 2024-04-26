import React from "react";
import "../styles/Card.css";
function Card({ title, content, email }) {
  return (
    <div className="card">
      <p>제목 : {title}</p>
      <div className="image-box">
        <img
          className="image-thumbnail"
          src="https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp"
          alt="post-img"
        ></img>
      </div>
      <p>작성자 : {email}</p>
    </div>
  );
}

export default Card;
