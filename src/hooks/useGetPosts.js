import { useCallback, useEffect, useState } from "react";
import { getPosts } from "../services/CommunityApi";
import usePayload from "./usePayload";

// useGetPosts.js
const useGetPosts = () => {
  usePayload();
  const [posts, setPosts] = useState([]);
  const fetchPosts = useCallback(() => {
    getPosts()
      .then((data) => {
        setPosts(
          data.result.map((post) => ({
            ...post,
            isChecked: false,
          }))
        );
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, setPosts, fetchPosts };
};

export default useGetPosts;
