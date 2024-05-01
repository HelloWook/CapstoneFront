import "../styles/Global.css";
import "../styles/Join.css";
import logo from "../assets/logo.png";
import img from "../assets/background.jpg";
import { joinUser } from "../services/UserApi";
import { useState } from "react";
import { emailPattern } from "../util/JoinUserPattern";
import { useNavigate } from "react-router-dom";

function Join() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!emailPattern.test(email)) {
      alert("이메일 양식을 지켜주세요");
      return;
    }
    await joinUser(email, password, nickname)
      .then((data) => {
        alert(data.message);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <div className="join" style={{ backgroundImage: { img } }}>
      <div className="join-box">
        <img src={logo} alt="background" />
        <form onSubmit={handleSignUp}>
          <input
            placeholder="Nickname"
            type="text"
            onChange={(event) =>
              setNickname((data) => (data = event.target.value))
            }
          />
          <input
            placeholder="Email"
            type="text"
            onChange={(event) =>
              setEmail((data) => (data = event.target.value))
            }
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(event) =>
              setPassword((data) => (data = event.target.value))
            }
          />
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
