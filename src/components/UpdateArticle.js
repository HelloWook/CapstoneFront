import React, { useEffect, useState } from "react";
import "../styles/UpdateArticle.css";
import { UploadFlower } from "../services/FlowerAPI";
import { useSelector } from "react-redux";

function UpdateArticle() {
  const [mainImg, setMainImg] = useState(
    "https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp"
  );
  const [name, setName] = useState("");
  const [kind, setkind] = useState("");
  const [file, setFile] = useState(null);
  const { email } = useSelector((state) => state);

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
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("kind", kind);
    formData.append("temperature", "0");
    formData.append("humidity", "0");
    await UploadFlower(formData)
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        alert(error.response.data.error);
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
