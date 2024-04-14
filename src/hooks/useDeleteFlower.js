const { deleteFlower } = require("../services/FlowerAPI");
/**
 * 다육이를 삭제하는 로직
 */
const useDeleteFlower = (flower_id) => {
  deleteFlower(flower_id)
    .then((data) => {
      alert(data.message);
    })
    .catch((error) => {
      alert(error.message);
    });
};
export default useDeleteFlower;
