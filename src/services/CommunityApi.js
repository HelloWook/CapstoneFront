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

export function uploadPosts(Title, content, email, date) {
  return axios
    .post("http://localhost:8080/post", {
      Title: Title,
      content: content,
      email: email,
      date: date,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
