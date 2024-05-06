import { useCallback, useEffect, useState } from "react";
import { getComment } from "../services/CommunityApi";

const useGetComment = (postID) => {
  const [comments, setComments] = useState([]);
  const fetchComment = useCallback(() => {
    getComment(postID)
      .then((data) => {
        console.log(data.result);
        setComments(() => {
          return data.result;
        });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    fetchComment();
  }, [fetchComment]);

  return { comments };
};

export default useGetComment;
