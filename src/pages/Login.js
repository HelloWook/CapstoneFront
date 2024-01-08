import "../styles/Global.css";
import "../styles/Login.css";
import logo from "../assets/logo.png";
import img from "../assets/background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/UserApi";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";

const style = { textDecoration: "none", color: "rgb(186, 184, 184)" };

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(email, password);
      const { token, nickname } = data;
      localStorage.setItem("accessToken", token);
      dispatch(login(email, nickname));
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login" style={{ backgroundImage: { img } }}>
      <div className="login-box">
        <img src={logo} alt="background" />
        <form onSubmit={handleLogin}>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(event) =>
              setEmail((data) => (data = event.target.value))
            }
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) =>
              setPassword((data) => (data = event.target.value))
            }
          />
          <button type="submit">로그인</button>
        </form>
      </div>
      <div>
        <span>
          <Link to="/join" style={style}>
            회원가입
          </Link>
        </span>
        <span>|| 아이디 찾기 </span>
        <span>|| 비밀번호 </span>
      </div>
    </div>
  );
}

export default Login;
