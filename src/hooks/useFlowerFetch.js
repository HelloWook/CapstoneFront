import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFlower } from "../services/FlowerAPI";
import { Payload } from "../services/UserApi";
import { login } from "../redux/actions/authActions";

export const useFlowerFetch = () => {
  const [Flower, setFlower] = useState([]);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = () => {
      if (!localStorage.getItem("accessToken")) {
        return;
      }
      return Payload()
        .then((payload) => {
          const { nickname, email } = payload.data;
          dispatch(login(email, nickname));
          if (!isLoggedIn) {
            return;
          }
          const encodedEmail = encodeURIComponent(email);
          return GetFlower(encodedEmail)
            .then((data) => {
              setFlower(() => [...data.result]);
              return Flower;
            })
            .catch((error) => {
              if (error.request.status === 419) {
                alert("재로그인을 해주세요");
              }
            });
        })
        .catch((error) => {
          alert(error);
        });
    };

    fetchData();
  }, [isLoggedIn]);
};
