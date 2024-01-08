import React, { useState } from "react";
import "../styles/Content.css";
import Article from "./Article";
import UpdateArticle from "./UpdateArticle";
import { useSelector } from "react-redux";

function Content() {
  const { isLoggedIn, email, nickname } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState("");
  const [myFlower, setMyflower] = useState(
    // 테스트 데이터
    [
      {
        img: "https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp",
        flowerName: "다육이",
        type: "장미",
        temp: 36.5,
        humidity: 94.0,
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Echinocereus_engelmannii_and_Cylindropuntia_bigelovii_at_Joshua_Tree_NP.jpg/800px-Echinocereus_engelmannii_and_Cylindropuntia_bigelovii_at_Joshua_Tree_NP.jpg",
        flowerName: "망곰이",
        type: "선인장",
        temp: 36.5,
        humidity: 98,
      },
      {
        img: "https://kukka-2-media-123.s3.amazonaws.com/media/contents/event_template/d5b6a32f-7720-48bb-a4f0-0d01dc0115fe.jpg",
        flowerName: "바라기",
        type: "해바라기",
        temp: 36.2,
        humidity: 94,
      },
    ]
  );

  // 모달 관리하는 상태
  const [updateMode, setUdateMode] = useState(false);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 리엑트 검색기능
  const filteredFlowers = myFlower.filter((data) =>
    Object.values(data).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
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
              img={data.img}
              flowerName={data.flowerName}
              type={data.type}
              temp={data.temp}
              humidity={data.humidity}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Content;
