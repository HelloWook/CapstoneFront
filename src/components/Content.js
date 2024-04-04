import React, { useEffect, useMemo, useState } from "react";
import "../styles/Content.css";
import Article from "./Article";
import UpdateArticle from "./UpdateArticle";
import { useDispatch, useSelector } from "react-redux";
import { GetFlower } from "../services/FlowerAPI";
import { Payload } from "../services/UserApi";
import { login } from "../redux/actions/authActions";

function Content() {
  const dispatch = useDispatch();
  const { isLoggedIn, email } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState("");
  const [myFlower, setMyflower] = useState([]);
  const [updateMode, setUdateMode] = useState(false);

  const filteredFlowers = myFlower.filter((data) =>
    Object.values(data).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const fetchData = async () => {
    try {
      if (!localStorage.getItem("accessToken")) {
        return;
      }
      const payload = await Payload();
      const { nickname, email } = payload.data;
      dispatch(login(email, nickname));

      if (!isLoggedIn) {
        return;
      }

      const encodedEmail = encodeURIComponent(email);
      const data = await GetFlower(encodedEmail);
      setMyflower(() => [...data.result]);
    } catch (error) {
      if (error.request.status === 419) {
        alert("재로그인을 해주세요");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoggedIn]);

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
          <UpdateArticle />
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
