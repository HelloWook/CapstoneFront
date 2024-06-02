import { useCallback } from "react";
const { deleteFlower } = require("../services/FlowerAPI");

const useDeleteFlower = () => {
  const flowerdelete = useCallback(({ flower_id, setMyflower, email }) => {
    deleteFlower(flower_id, email)
      .then((data) => {
        alert(data.message);
        setMyflower(() => [...data.result]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return flowerdelete;
};
export default useDeleteFlower;
