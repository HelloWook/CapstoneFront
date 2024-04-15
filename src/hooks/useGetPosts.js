import { useCallback, useEffect, useState } from "react";
import { getPosts } from "../services/CommunityApi";

// useGetPosts.js
const useGetPosts = () => {
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
