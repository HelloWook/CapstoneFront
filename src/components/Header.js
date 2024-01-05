import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const style = { textDecoration: "none", color: "#474838" };

function Header() {
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
      <button className="header-content-community">다육 커뮤니티</button>
      <button className="header-content-random">다육이 추천</button>
      <button className="header-content-guide">
        <Link to="/detail" style={style}>
          사용자 가이드
        </Link>
      </button>
      <button className="header-content-login">
        <Link to="/login" style={style}>
          로그인/가입
        </Link>
      </button>
    </header>
  );
}

export default Header;
