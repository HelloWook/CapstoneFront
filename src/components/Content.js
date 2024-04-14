import React, { useEffect, useMemo, useState } from "react";
import "../styles/Content.css";
import Article from "./Article";
import UpdateArticle from "./UpdateArticle";
import useGetFlower from "../hooks/useGetFlower";
import { useSelector } from "react-redux";

function Content() {
  const { isLoggedIn } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState("");
  const [updateMode, setUdateMode] = useState(false);
  const [myFlower, setMyflower] = useState([]);
  const { fetchData } = useGetFlower();
  useEffect(() => {
    fetchData(setMyflower);
  }, [isLoggedIn]);

  const filterFlowers = useMemo(() => {
    return myFlower.filter((data) =>
      Object.values(data).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [myFlower, searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleUpdateMode = () => {
    setUdateMode((data) => !data);
  };

  return (
    <div className="content">
      <div className="content-section-list">
        <div className="content-section-list-searchbox-content">
          <input
            className="content-section-list-searchbox"
            placeholder="이름 또는 품종을 통해 검색이 가능합니다."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            className="content-section-list-appendbutton"
            onClick={toggleUpdateMode}
          >
            {updateMode ? "취소" : "추가"}
          </button>
        </div>

        {!isLoggedIn ? (
          <p className="content-nodata">로그인 해주세요</p>
        ) : updateMode ? (
          <UpdateArticle setMyflower={setMyflower} />
        ) : (
          filterFlowers.map((data, index) => (
            <Article
              key={index}
              img={data.image_url}
              flowerName={data.name}
              type={data.kind}
              temp={data.temperature}
              humidity={data.humidity}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Content;
