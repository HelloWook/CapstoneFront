import "../styles/Global.css";
import "../styles/Join.css";
import logo from "../assets/logo.png";
import img from "../assets/background.jpg";
function Join() {
  return (
    <div className="join" style={{ backgroundImage: { img } }}>
      <div className="join-box">
        <img src={logo} alt="background" />
        <input placeholder="UserName" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
        <button>회원가입</button>
      </div>
    </div>
  );
}

export default Join;
