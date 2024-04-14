import { useCallback } from "react";
const { deleteFlower } = require("../services/FlowerAPI");
/**
 * 다육이를 삭제하는 로직
 */
const useDeleteFlower = () => {
  const flowerdelete = useCallback(({ flower_id, setMyflower, email }) => {
    deleteFlower(flower_id, email)
      .then((data) => {
        console.log(data);
        alert(data.message);
        setMyflower(() => [...data.result]);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return flowerdelete;
};
export default useDeleteFlower;
