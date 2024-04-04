import "../styles/Global.css";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import logo from "../assets/logo.png";
import img from "../assets/background.jpg";

const style = { textDecoration: "none", color: "rgb(186, 184, 184)" };

function Login() {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const redirectPath = await handleLogin(email, password);
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${img})` }}>
      <div className="login-box">
        <img src={logo} alt="background" />
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
