import axios from "axios";

export async function UploadFlower(
  name,
  kind,
  temperature,
  humidity,
  image_url,
  email
) {
  return axios
    .post("http://localhost:8080/upload", {
      name: name,
      kind: kind,
      temperature: temperature,
      humidity: humidity,
      image_url: image_url,
      email: email,
    })
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
