import axios from "axios";

export async function uploadFlower(formData) {
  return axios
    .post("http://localhost:8080/flower/upload", formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export async function getFlower(email) {
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

export async function deleteFlower(flower_id) {
  return axios
    .delete(`http://localhost:8080/flower/${flower_id}`, {
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
