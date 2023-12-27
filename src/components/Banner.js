import React from "react";
import banner from "../assets/banner.png";
import "../styles/Banner.css";
function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner"></img>
    </div>
  );
}

export default Banner;
