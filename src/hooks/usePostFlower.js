import { useCallback } from "react";
import { uploadFlower } from "../services/FlowerAPI";
/**
 * 꽃 데이터 전송
 */
const usePostFlower = () => {
  const flowerUpload = useCallback((file, name, email, kind, setMyflower) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("kind", kind);
    formData.append("temperature", "0");
    formData.append("humidity", "0");
    formData.append("soilHumidity", "0");
    uploadFlower(formData)
      .then((data) => {
        alert(data.message);
        setMyflower(() => [...data.result]);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }, []);

  return flowerUpload;
};

export default usePostFlower;
