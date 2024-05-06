import { useCallback, useEffect, useState } from "react";
import { getCommentNumber } from "../services/CommunityApi";

const useGetCommenCount = (postID) => {
  const [commentsCount, setCommentsCount] = useState([]);
  const fetchComment = useCallback(() => {
    getCommentNumber(postID)
      .then((data) => {
        setCommentsCount(() => {
          return data;
        });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    fetchComment();
  }, [fetchComment]);

  return { commentsCount };
};
export default useGetCommenCount;
