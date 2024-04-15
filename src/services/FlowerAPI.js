import axios from "axios";

export function uploadFlower(formData) {
  return axios
    .post("http://localhost:8080/flower/upload", formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function getFlower(email) {
  return axios
    .get(`http://localhost:8080/flower/${email}`, {
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

export function deleteFlower(flower_id, email) {
  return axios
    .delete(`http://localhost:8080/flower/${flower_id}`, {
      headers: {
        authorization: localStorage.getItem("accessToken"),
        email: email,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
