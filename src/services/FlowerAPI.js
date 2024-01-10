import axios from "axios";

export async function UploadFlower(formData) {
  return axios
    .post("http://localhost:8080/flower/upload", formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export async function GetFlower(email) {
  return axios
    .get(`http://localhost:8080/flower/get/${email}`, {
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
