import React, { useState } from "react";
import "../styles/Card.css";

function Card({ title, email, setPosts, index }) {
  const [isClicked, setIsclicked] = useState(false);
  const handleClick = () => {
    setIsclicked(!isClicked);
    setPosts((prevPosts) => {
      return prevPosts.map((post, i) => {
        if (i === index) {
          return { ...post, isChecked: !isClicked };
        }
        return post;
      });
    });
  };
  return (
    <div className={`card`} onClick={handleClick}>
      <p>제목 : {title}</p>
      <div className={`image-box ${isClicked ? "checked" : ""}`}>
        <img
          className={`image-thumbnail ${isClicked ? "checked" : ""}`}
          src="https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp"
          alt="post-img"
        />
      </div>
      <p className={`writer ${isClicked ? "checked" : ""}`}>작성자 : {email}</p>
      {isClicked && <span className="check-mark">❌</span>}
    </div>
  );
}

export default Card;
