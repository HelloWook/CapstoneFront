import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/CommunityUpload.css";
import { uploadPosts } from "../services/CommunityApi";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CommunityBoard() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const email = useSelector((state) => state.email);
  const quillRef = useRef();
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
    console.log(email);
  };
  const handleSubmit = () => {
    const date = new Date();
    uploadPosts(title, content, email, date)
      .then((res) => {
        alert(res.message);
        navigate("/community");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("img", file);
      try {
        const result = await axios.post("http://localhost:8080/img", formData);
        const IMG_URL = result.data.url;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        alert("error");
      }
    });
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "image",
  ];
  return (
    <div className="community-upload">
      <h3 className="community-title">게시글 작성</h3>
      <div className="community-upload-box">
        <div className="community-upload-content">
          <p className="community-upload-title"> 제목 </p>
          <input
            className="community-upload-input"
            placeholder="제목을 입력해주세요"
            type="text"
            onChange={handleTitleChange}
          />
          <p className="community-upload-title"> 게시판</p>
          <div className="box">
            <ReactQuill
              ref={quillRef}
              value={content}
              theme="snow"
              onChange={setContent}
              modules={modules}
              formats={formats}
            />
          </div>
          <button className="community-upload-button" onClick={handleSubmit}>
            업로드
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommunityBoard;
