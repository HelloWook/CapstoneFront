import React, { useEffect, useState } from "react";
import "../styles/UpdateArticle.css";

function UpdateArticle({ appendFunction }) {
  let [mainImg, setMainImg] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const setPreviewImg = (event) => {
    var reader = new FileReader();
    reader.onload = function (event) {
      setMainImg((data) => (data = event.target.result));
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  return (
    <div className="update-article">
      {mainImg ? (
        <img alt="업로드 사진" src={mainImg} />
      ) : (
        <img
          alt="업로드 사진"
          src="https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp"
        />
      )}
      <input type="file" accept="image/*" onChange={setPreviewImg} />
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        onChange={(event) => setName((data) => (data = event.target.value))}
      />
      <input
        type="text"
        placeholder="품종을 입력해주세요"
        onChange={(event) => setType((data) => (data = event.target.value))}
      />
      <br />
      <button
        onClick={() => {
          const newFlower = {
            img:
              mainImg ||
              "https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp",
            flowerName: name,
            type: type,
            temp: 60,
            humidity: 60,
          };
          appendFunction((prevData) => [...prevData, newFlower]);
          alert("업로드 되었습니다.");
        }}
      >
        업로드
      </button>
    </div>
  );
}

export default UpdateArticle;
