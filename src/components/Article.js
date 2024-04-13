import React from "react";
import "../styles/Article.css";
function Article({ img, flowerName, type, temp, humidity }) {
  let modifiedURL = img.replace(/\\/g, "/");
  modifiedURL = modifiedURL.replace(/ /g, "%20");

  return (
    <div className="article">
      <img src={img}></img>
      <div className="article-text">
        <p>이름 : {flowerName}</p>
        <p>품종 : {type}</p>
        <p>온도 : {temp}</p>
        <p>습도 : {humidity}</p>
      </div>
    </div>
  );
}

export default Article;
