// UpdateArticle.js
import React, { useState } from "react";
import "../styles/UpdateArticle.css";
import { useSelector } from "react-redux";
import useArtcileUpdate from "../hooks/useArtcileUpdate";

function UpdateArticle() {
  const [mainImg, setMainImg] = useState(
    "https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp"
  );
  const [name, setName] = useState("");
  const [kind, setkind] = useState("");
  const [file, setFile] = useState(null);
  const { email } = useSelector((state) => state);
  const FlowerUpload = useArtcileUpdate(); // 변경된 부분

  const setPreviewImg = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    var reader = new FileReader();
    reader.onload = function (event) {
      setMainImg((data) => (data = event.target.result));
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (name == "" || kind == "") {
      alert("이름과 품종을 입력해주세요");
      return;
    }
    await FlowerUpload(file, name, email, kind)
      .then((message) => {
        alert(message);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="update-article">
      <form encType="multipart/form-data" onSubmit={handleUpload}>
        <img alt="업로드 사진" src={mainImg} />
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
        <button type="submit">업로드</button>
      </form>
    </div>
  );
}

export default UpdateArticle;
