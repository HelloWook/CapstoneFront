import axios from "axios";

export async function joinUser(email, password, nickname) {
  return axios
    .post("http://localhost:8080/join", {
      email: email,
      password: password,
      nickname: nickname,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export async function loginUser(email, password, nickname) {
  return axios
    .post("http://localhost:8080/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export async function Payload() {
  return axios
    .get("http://localhost:8080/payload", {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
