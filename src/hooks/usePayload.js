import { useCallback, useEffect } from "react";
import { Payload } from "../services/UserApi";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authActions";
/*
새로고침시에도 검증하는 훅
*/

const usePayload = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state);

  const payloadCheck = useCallback(() => {
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
      })
      .catch((error) => {
        if (error.request.status === 419) {
          alert("재로그인을 해주세요");
        }
      });
  }, []);

  useEffect(() => {
    payloadCheck();
  }, [payloadCheck]);
};

export default usePayload;
