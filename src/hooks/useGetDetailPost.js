import { useCallback, useEffect, useState } from "react";
import { getDetailPost } from "../services/CommunityApi";
import usePayload from "./usePayload";

// 게시글 상세페이지로 이동
const useGetDetailPosts = (postid) => {
  usePayload();
  const [detailPost, setDetailPost] = useState([]);
  const fetchDetailPosts = useCallback(() => {
    getDetailPost(postid)
      .then((data) => {
        setDetailPost(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    fetchDetailPosts();
  }, [fetchDetailPosts]);

  return { detailPost };
};

export default useGetDetailPosts;
