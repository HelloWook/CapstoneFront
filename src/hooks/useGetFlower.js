import { useEffect, useState } from "react";
import "../styles/Content.css";
import { useDispatch, useSelector } from "react-redux";
import { GetFlower } from "../services/FlowerAPI";
import { Payload } from "../services/UserApi";
import { login } from "../redux/actions/authActions";

const useFetchData = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state);
  const [myFlower, setMyflower] = useState([]);

  const fetchData = async () => {
    try {
      if (!localStorage.getItem("accessToken")) {
        return;
      }
      const payload = await Payload();
      const { nickname, email } = payload.data;
      dispatch(login(email, nickname));

      if (!isLoggedIn) {
        return;
      }

      const encodedEmail = encodeURIComponent(email);
      const data = await GetFlower(encodedEmail);
      setMyflower(() => [...data.result]);
    } catch (error) {
      if (error.request.status === 419) {
        alert("재로그인을 해주세요");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoggedIn]);

  return myFlower;
};

export default useFetchData;
