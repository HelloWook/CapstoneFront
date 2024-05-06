// Post.js
import Card from "./Card";
import "../styles/post.css";
import useGetPosts from "../hooks/useGetPosts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useDeletePost from "../hooks/useDeletePost";
import { useState } from "react";

function Post() {
  const { posts, setPosts, fetchPosts } = useGetPosts();
  const { email } = useSelector((state) => state);
  const [isDelete, setIsDelete] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const postDelete = useDeletePost();
  const handleDelete = () => {
    const filterPost = posts.filter((post) => post.isChecked === true);
    if (filterPost.length === 0) {
      alert("삭제할 요소를 선택해주세요");
      return;
    }
    filterPost.forEach((post) => {
      postDelete(post.PostID, email).then(() => {
        fetchPosts();
      });
    });
  };
  return (
    <div className="post">
      {isLoggedIn && (
        <div className="button-list">
          <h2 className="img-head">커뮤니티 게시판</h2>
          {isLoggedIn && (
            <button className="upload-button">
              <Link to="/community/upload">등록</Link>
            </button>
          )}
          {isLoggedIn && (
            <button
              className="select-button"
              onClick={() => setIsDelete((prev) => !prev)}
            >
              {isDelete ? "취소" : "삭제"}
            </button>
          )}
          {isDelete && (
            <button className="delete-button" onClick={handleDelete}>
              삭제하기
            </button>
          )}
        </div>
      )}
      <div className="cards">
        <div className="card-section">
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.Title}
              email={post.email}
              setPosts={setPosts}
              index={index}
              isChecked={post.isChecked}
              PostID={post.PostID}
              isDelete={isDelete}
              image_url={post.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
