import { UploadFlower } from "../services/FlowerAPI";

const useArtcileUpdate = () => {
  const FlowerUpload = (file, name, email, kind) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("kind", kind);
    formData.append("temperature", "0");
    formData.append("humidity", "0");
    return UploadFlower(formData)
      .then((data) => {
        return data.message;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  };

  return FlowerUpload;
};

export default useArtcileUpdate;
