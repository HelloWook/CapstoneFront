import { useEffect, useState } from "react";
import "../styles/Content.css";
import { useDispatch, useSelector } from "react-redux";
import { GetFlower } from "../services/FlowerAPI";
import { Payload } from "../services/UserApi";
import { login } from "../redux/actions/authActions";
/**
 * 자신의 다육이를 불러오는 로직
 */
const useGetFlower = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state);
  const [myFlower, setMyflower] = useState([]);

  const fetchData = () => {
    Payload()
      .then((payload) => {
        if (!localStorage.getItem("accessToken")) {
          return;
        }
        const { nickname, email } = payload.data;
        dispatch(login(email, nickname));
        if (!isLoggedIn) {
          return;
        }
        const encodedEmail = encodeURIComponent(email);
        return GetFlower(encodedEmail);
      })
      .then((data) => {
        if (data) {
          setMyflower(() => [...data.result]);
        }
      })
      .catch((error) => {
        if (error.request.status === 419) {
          alert("재로그인을 해주세요");
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, [isLoggedIn]);

  return myFlower;
};

export default useGetFlower;
