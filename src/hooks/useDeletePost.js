import { useCallback } from "react";
import { deletePost } from "../services/CommunityApi";
/**
 * 다육이를 삭제하는 로직
 */
const useDeletePost = () => {
  const postDelete = useCallback((postid, email) => {
    return deletePost(postid, email);
  }, []);

  return postDelete;
};

export default useDeletePost;
