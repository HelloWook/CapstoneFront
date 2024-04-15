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
        setPosts(data.result);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return posts;
};

export default useGetPosts;
