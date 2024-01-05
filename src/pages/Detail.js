import React from "react";
import Header from "../components/Header";
import logo from "../assets//logo.png";
import "../styles/Detail.css";
function Detail() {
  return (
    <div className="detail">
      <Header />
      <img src={logo} alt="logo" className="detail-log" />
      <div className="detail-text"></div>
    </div>
  );
}

export default Detail;
