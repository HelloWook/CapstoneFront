import "../styles/Global.css";
import "../styles/Login.css";
import logo from "../assets/logo.png";
import img from "../assets/background.jpg";
import { Link } from "react-router-dom";

const style = { textDecoration: "none", color: "rgb(186, 184, 184)" };

function Login() {
  return (
    <div className="login" style={{ backgroundImage: { img } }}>
      <div className="login-box">
        <img src={logo} alt="background" />
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
        <br />
        <button>로그인</button>
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
