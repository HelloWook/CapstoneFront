import React, { useEffect, useState } from "react";
import "../styles/UpdateArticle.css";
import { UploadFlower } from "../services/FlowerAPI";

function UpdateArticle({ appendFunction }) {
  let [mainImg, setMainImg] = useState("");
  const [name, setName] = useState("");
  const [kind, setkind] = useState("");
  // 로그인 기능 추가후 변경
  const [email, setemail] = useState("wookgod01@naver.com");
  const setPreviewImg = (event) => {
    var reader = new FileReader();
    reader.onload = function (event) {
      setMainImg((data) => (data = event.target.result));
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleUpload = async () => {
    await UploadFlower(name, kind, 0, 0, mainImg, email)
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
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
        onChange={(event) => setkind((data) => (data = event.target.value))}
      />
      <br />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
}

export default UpdateArticle;
