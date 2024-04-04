// useLogin 훅 생성
import { useState } from "react";
import { loginUser } from "../services/UserApi";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";

function useLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      const { token, nickname, message } = data;
      localStorage.setItem("accessToken", token);
      dispatch(login(email, nickname));
      alert(message);
      return "/";
    } catch (error) {
      alert(error.response.data.message);
      return null;
    }
  };

  return { email, setEmail, password, setPassword, handleLogin };
}

export default useLogin;
