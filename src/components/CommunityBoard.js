import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/CommunityUpload.css";

function CommunityBoard() {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "underline"],
      ],
    },
  };

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
          />
          <p className="community-upload-title"> 게시판</p>
          <div className="box">
            <ReactQuill value={value} onChange={setValue} modules={modules} />
          </div>
          <button className="community-upload-button">업로드</button>
        </div>
      </div>
    </div>
  );
}

export default CommunityBoard;