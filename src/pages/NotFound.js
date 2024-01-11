import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

const style = { textAlign: "center" };

function NotFound() {
  return (
    <div>
      <Header />
      <Banner />
      <h1 style={style}>NOT FOUND!</h1>
    </div>
  );
}

export default NotFound;
