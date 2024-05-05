import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../styles/Card.css";
function Card({
  title,
  email,
  setPosts,
  index,
  isChecked,
  isDelete,
  PostID,
  image_url,
}) {
  const navigate = useNavigate();
  const myEmail = useSelector((state) => state.email);

  const deleteClick = () => {
    if (myEmail !== email) {
      alert("자신의 게시글만 삭제할 수 있습니다.");
      return;
    }
    setPosts((prevPosts) => {
      return prevPosts.map((post, i) => {
        if (i === index) {
          return { ...post, isChecked: !isChecked };
        }
        return post;
      });
    });
  };

  return (
    <div
      className={`card`}
      onClick={
        isDelete
          ? () => {
              deleteClick();
            }
          : () => {
              navigate(`/community/post/${PostID}`);
            }
      }
    >
      <p>제목 : {title}</p>
      <div className={`image-box ${isChecked ? "checked" : ""}`}>
        <img
          className={`image-thumbnail ${isChecked ? "checked" : ""}`}
          src={
            image_url
              ? image_url
              : "https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp"
          }
          alt="post-img"
        />
      </div>
      <p className={`writer ${isChecked ? "checked" : ""}`}>작성자 : {email}</p>
      {isChecked && <span className="check-mark">❌</span>}
    </div>
  );
}

export default Card;
