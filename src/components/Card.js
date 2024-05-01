import "../styles/Card.css";
function Card({ title, email, setPosts, index, isChecked, isDelete }) {
  const handleClick = () => {
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
              handleClick();
            }
          : () => {
              alert("안녕");
            }
      }
    >
      <p>제목 : {title}</p>
      <div className={`image-box ${isChecked ? "checked" : ""}`}>
        <img
          className={`image-thumbnail ${isChecked ? "checked" : ""}`}
          src="https://i.namu.wiki/i/4ucM0uKIFisi3MBXl0k8ZY3goQZtMYZxaqbih6jgBRmesC0Ode8dzd6JGeFStJl3ISkli3FVCBEFff6uf9zyUw.webp"
          alt="post-img"
        />
      </div>
      <p className={`writer ${isChecked ? "checked" : ""}`}>작성자 : {email}</p>
      {isChecked && <span className="check-mark">❌</span>}
    </div>
  );
}

export default Card;
