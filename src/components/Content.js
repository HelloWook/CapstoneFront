import React, { useEffect, useState } from "react";
import "../styles/Content.css";
import Article from "./Article";
import UpdateArticle from "./UpdateArticle";
import { useSelector } from "react-redux";
import { GetFlower } from "../services/FlowerAPI";

function Content() {
  const { isLoggedIn, email } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState("");
  const [myFlower, setMyflower] = useState([]);
  // 리엑트 검색기능
  const filteredFlowers = myFlower.filter((data) =>
    Object.values(data).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  useEffect(() => {
    async function fetchData() {
      if (!isLoggedIn) {
        return;
      }
      try {
        const encodedEmail = encodeURIComponent(email);
        const data = await GetFlower(encodedEmail);
        setMyflower(() => [...data.result]);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(myFlower);
  }, [myFlower]);

  // 모달 관리하는 상태
  const [updateMode, setUdateMode] = useState(false);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
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
            onClick={() => setUdateMode((data) => !data)}
          >
            {updateMode ? "취소" : "추가"}
          </button>
        </div>

        {!isLoggedIn ? (
          <p className="content-nodata">로그인 해주세요</p>
        ) : updateMode ? (
          <UpdateArticle appendFunction={setMyflower} />
        ) : (
          filteredFlowers.map((data, index) => (
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
