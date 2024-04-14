import { useCallback } from "react";
import { uploadFlower } from "../services/FlowerAPI";
/**
 * 꽃 데이터 전송
 */

const usePostFlower = () => {
  const FlowerUpload = useCallback((file, name, email, kind, setMyflower) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("kind", kind);
    formData.append("temperature", "0");
    formData.append("humidity", "0");
    uploadFlower(formData)
      .then((data) => {
        console.log(data);
        alert(data.message);
        setMyflower(() => [...data.result]);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []); // 빈 배열을 두어 함수가 처음 생성될 때만 실행되도록 함

  return FlowerUpload;
};

export default usePostFlower;
