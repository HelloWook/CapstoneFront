import React from "react";
import "../styles/Article.css";
import useDeleteFlower from "../hooks/useDeleteFlower";
import { useSelector } from "react-redux";

function Article({
  flower_id,
  img,
  flowerName,
  type,
  temp,
  humidity,
  setMyflower,
}) {
  const flowerdelete = useDeleteFlower();
  const email = useSelector((state) => state.email);
  const handleDelete = () => {
    flowerdelete({ flower_id, setMyflower, email });
  };

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
          <p>물주기</p>
          <p onClick={handleDelete}>삭제</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
