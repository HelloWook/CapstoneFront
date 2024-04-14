// UpdateArticle.js
import React, { useEffect, useState } from "react";
import "../styles/UpdateArticle.css";
import { useSelector } from "react-redux";
import usePostFlower from "../hooks/usePostFlower";
import useGetFlower from "../hooks/useGetFlower";

function UpdateArticle({ setMyflower }) {
  const [mainImg, setMainImg] = useState(
    "https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp"
  );
  const [name, setName] = useState("");
  const [kind, setkind] = useState("");
  const [file, setFile] = useState(null);
  const { email } = useSelector((state) => state);
  const FlowerUpload = usePostFlower();
  const setPreviewImg = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    var reader = new FileReader();
    reader.onload = function (event) {
      setMainImg((data) => (data = event.target.result));
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (name === "" || kind === "") {
      alert("이름과 품종을 입력해주세요");
      return;
    }
    FlowerUpload(file, name, email, kind, setMyflower);
  };

  return (
    <div>
      <form
        encType="multipart/form-data"
        onSubmit={handleUpload}
        className="update-article"
      >
        <img alt="업로드 사진" src={mainImg} />
        <div>
          <input type="file" accept="image/*" onChange={setPreviewImg} />
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) => setName((data) => (data = event.target.value))}
          />
          <input
            type="text"
            placeholder="품종을 입력해주세요"
            onChange={(event) => setkind((data) => (data = event.target.value))}
          />
          <input type="text" placeholder="식별 번호" />
          <button type="submit">업로드</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateArticle;
