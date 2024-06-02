import "../styles/CommunityDetailPost.css";
import useGetDetailPosts from "../hooks/useGetDetailPost";
import { useParams } from "react-router-dom";
function DetailPost() {
  const { postID } = useParams();
  const { detailPost } = useGetDetailPosts(postID);

  return (
    <div className="communitydetailpost">
      <h1>{`${postID}번째 게시글`}</h1>
      <div className="communitydetailpost-content">
        <span>제목</span>
        <div className="communitydetailpost-content-title">
          {detailPost.Title}
        </div>
        <span>내용</span>
        <div
          className="communitydetailpost-content-summary"
          dangerouslySetInnerHTML={{ __html: detailPost.Content }}
        />
      </div>
    </div>
  );
}

export default DetailPost;
