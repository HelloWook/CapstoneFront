import React from "react";
import "../styles/Article.css";
function Article({ img, flowerName, type, temp, humidity }) {
  return (
    <div className="article">
      <img
        src={img}
        alt="반려식물 이미지
      "
      ></img>
      <div className="article-text">
        <p>이름 : {flowerName}</p>
        <p>품종 : {type}</p>
        <p>온도 : {temp}</p>
        <p>습도 : {humidity}</p>
        <div className="article-text-changes">
          <p>수정</p>
          <p>삭제</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
