import { useState } from "react";
import { loginUser } from "../services/UserApi";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
/**
 * 로그인을 진행하는 로직
 */
function useLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    loginUser(email, password)
      .then((data) => {
        const { token, nickname, message } = data;
        localStorage.setItem("accessToken", token);
        dispatch(login(email, nickname));
        alert(message);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return { email, setEmail, password, setPassword, handleLogin };
}

export default useLogin;
