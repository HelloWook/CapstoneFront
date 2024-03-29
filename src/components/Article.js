import React from "react";
import "../styles/Article.css";
function Article({ img, flowerName, type, temp, humidity }) {
  let modifiedURL = img.replace(/\\/g, "/");
  modifiedURL = modifiedURL.replace(/ /g, "%20");

  const articleStyle = {
    backgroundImage: `url(${modifiedURL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="article" style={articleStyle}>
      <div className="article-text">이름 : {flowerName}</div>
      <div className="article-text">품종 : {type}</div>
      <div className="article-text">온도 : {temp}</div>
      <div className="article-text">습도 : {humidity}</div>
    </div>
  );
}

export default Article;
