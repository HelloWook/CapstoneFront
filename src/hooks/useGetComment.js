import { useCallback, useEffect, useState } from "react";
import { getComment } from "../services/CommunityApi";

const useGetComment = (postID, currentPage) => {
  const [comments, setComments] = useState([]);
  const fetchComment = useCallback(() => {
    getComment(postID, currentPage)
      .then((data) => {
        setComments(() => {
          return data.result;
        });
      })
      .catch((error) => {
        alert(error);
      });
  }, [currentPage, postID]);

  useEffect(() => {
    fetchComment();
  }, [fetchComment, currentPage]);

  return { comments, fetchComment };
};

export default useGetComment;
