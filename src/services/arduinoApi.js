import axios from "axios";

export function runMotor() {
  return axios
    .get(`http://localhost:8080/motor/1`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
