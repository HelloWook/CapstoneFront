import axios from "axios";

export function getPosts() {
  return axios
    .get("http://localhost:8080/posts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
