import { useCallback, useEffect, useState } from "react";
import { getCommentNumber } from "../services/CommunityApi";

const useGetCommenCount = (postID) => {
  const [commentsCount, setCommentsCount] = useState(0);
  const fetchCommentCount = useCallback(() => {
    getCommentNumber(postID)
      .then((data) => {
        setCommentsCount(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [postID]);

  useEffect(() => {
    fetchCommentCount();
  }, [fetchCommentCount]);

  return { commentsCount, fetchCommentCount };
};
export default useGetCommenCount;
