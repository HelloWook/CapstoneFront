import axios from "axios";

export async function JoinUser(email, password, nickname) {
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
