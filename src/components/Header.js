import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";
function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo"></img>
      <button className="header-content-myflower">나의 다육이</button>
      <button className="header-content-community">다육 커뮤니티</button>
      <button className="header-content-random">다육이 추천</button>
      <button className="header-content-guide">사용자 가이드</button>
      <button className="header-content-login">로그인/가입</button>
    </header>
  );
}

export default Header;
