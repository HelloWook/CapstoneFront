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

export function getDetailPost(postid) {
  return axios
    .get(`http://localhost:8080/post/${postid}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function uploadPosts(Title, content, email, previewimage) {
  return axios
    .post("http://localhost:8080/post", {
      Title: Title,
      content: content,
      email: email,
      image_url: previewimage,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function deletePost(postid, email) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`http://localhost:8080/post/${postid}`, {
        headers: {
          authorization: localStorage.getItem("accessToken"),
          email: email,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getComment(postID, page) {
  return axios
    .get(`http://localhost:8080/comment/post/${postID}/${page}`, {})
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function getCommentNumber(postID) {
  return axios
    .get(`http://localhost:8080/comment/count/${postID}`, {})
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function postComment(content, email, postID) {
  return axios
    .post("http://localhost:8080/comment", {
      content: content,
      email: email,
      postID: postID,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
