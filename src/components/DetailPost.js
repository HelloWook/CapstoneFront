import "../styles/CommunityDetailPost.css";
import useGetDetailPosts from "../hooks/useGetDetailPost";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useGetCommenCount from "../hooks/useGetCommentNumber";

function DetailPost() {
  const { postID } = useParams();
  const { detailPost } = useGetDetailPosts(postID);
  const [isLiked, setTsLiked] = useState(false);
  const { commentsCount } = useGetCommenCount(postID);

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
        <FontAwesomeIcon
          icon={faHeart}
          className={isLiked ? "rounded-icon-active" : "rounded-icon"}
          onClick={() => {
            setTsLiked((prev) => {
              return !prev;
            });
          }}
        />
        <div className="post-info">
          <span>좋아요 : 0</span>
          <span>조회수 : 0</span>
          <span>댓글수 : {commentsCount}</span>
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
