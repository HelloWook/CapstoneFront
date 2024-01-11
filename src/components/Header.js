import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";

const style = { textDecoration: "none", color: "#474838" };

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken");
  };
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo"></img>
      </Link>
      <button className="header-content-myflower">
        <Link to="/" style={style}>
          나의 다육이
        </Link>
      </button>
      <button className="header-content-community">
        <Link to="/community" style={style}>
          다육 커뮤니티
        </Link>
      </button>
      <button className="header-content-random">다육이 추천</button>
      <button className="header-content-guide">
        <Link to="/detail" style={style}>
          사용자 가이드
        </Link>
      </button>
      <button className="header-content-login">
        {!isLoggedIn ? (
          <Link to="/login" style={style}>
            로그인/가입
          </Link>
        ) : (
          <Link style={style} onClick={handleLogout}>
            로그아웃
          </Link>
        )}
      </button>
    </header>
  );
}

export default Header;
